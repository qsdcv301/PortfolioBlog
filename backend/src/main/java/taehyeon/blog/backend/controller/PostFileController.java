package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import taehyeon.blog.backend.FileUtils;
import taehyeon.blog.backend.entity.PostFile;
import taehyeon.blog.backend.service.PostFileServiceImpl;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import java.io.IOException;

@RequiredArgsConstructor
@RestController("/api/posts/files")
public class PostFileController {

    private final PostFileServiceImpl postFileService;

    @PostMapping
    public ResponseEntity<?> uploadFile(@RequestParam("ntime") Long nTime,
                                        @RequestParam("files") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("파일이 없습니다.");
        }
        try {
            // 파일명 및 확장자 분리
            String originalFilename = file.getOriginalFilename();
            String ext = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);

            // 이미지인지 일반 파일인지 확인
            boolean isImg = FileUtils.ALLOWED_IMAGE_EXT.contains(ext);
            String subDirectory = isImg ? "images" : "files";

            // 새 파일명
            String uuid = UUID.randomUUID().toString(); // 임의 문자 생성
            String newFileName = subDirectory + "_" + uuid + "." + ext;

            // 업로드
            Path uploadPath = Paths.get(FileUtils.UPLOAD_DIR + subDirectory + "/" + nTime.toString());
            if (!Files.exists((uploadPath))) {
                Files.createDirectories(uploadPath);
            }

            // 파일 저장
            Path filePath = uploadPath.resolve(newFileName);
            Files.write(filePath, file.getBytes());

            // db저장
            PostFile postFile = new PostFile();
            postFile.setNTime(nTime);
            postFile.setNFileName(newFileName);
            postFile.setOFileName(originalFilename);
            postFile.setExt(ext);
            postFile.setFSize(file.getSize());

            postFileService.saveFile(postFile);

            // 응답
            Map<String, Object> res = new HashMap<>();
            res.put("url", "/upload/" + subDirectory + "/" + nTime + "/" + newFileName);
            return ResponseEntity.ok(res);

        } catch (IOException e) {
            // 400 error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("업로드 중 에러발생 " + e.getMessage());
        }
    }

}
