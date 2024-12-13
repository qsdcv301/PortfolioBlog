package taehyeon.blog.backend.service;

import taehyeon.blog.backend.entity.PostFile;

import java.util.List;
import java.util.Optional;

public interface PostFileService {

    List<PostFile> getFilesByNtime(Long ntime);

    PostFile saveFile(PostFile postFile);

    Optional<PostFile> getFileById(Long id);

    void deleteFileById(Long id);

    void deleteAllByNtime(long ntime);

    Optional<PostFile> findFirstImageByNtime(Long ntime);
}
