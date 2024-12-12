package taehyeon.blog.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taehyeon.blog.backend.entity.PostFile;
import taehyeon.blog.backend.repository.PostFileRepository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PostFileServiceImpl implements PostFileService {

    private final PostFileRepository postFileRepository;

    @Override
    public List<PostFile> getFilesByNTime(Long nTime) {
        return postFileRepository.findAllByNTime(nTime);
    }

    @Override
    public PostFile saveFile(PostFile postFile) {
        return postFileRepository.save(postFile);
    }

    @Override
    public Optional<PostFile> getFileById(Long id) {
        return postFileRepository.findById(id);
    }

    @Override
    public void deleteFileById(Long id) {
        postFileRepository.deleteById(id);
    }

    @Override
    public void deleteAllByNTime(long nTime){
        postFileRepository.deleteAllByNTime(nTime);
    }

}
