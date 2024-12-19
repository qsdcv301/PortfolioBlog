package taehyeon.blog.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taehyeon.blog.backend.entity.PostComment;
import taehyeon.blog.backend.repository.PostCommentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostCommentServiceImpl implements PostCommentService {

    private final PostCommentRepository postCommentRepository;

    @Override
    public List<PostComment> findAllByPostId(Long postId){
        return postCommentRepository.findAllByPostId(postId);
    }

    @Override
    public PostComment create(PostComment postComment){
        return postCommentRepository.save(postComment);
    }

    @Override
    public void deleteById(long postId){
        if(postCommentRepository.existsById(postId)){
            postCommentRepository.deleteById(postId);
        }
    }

}
