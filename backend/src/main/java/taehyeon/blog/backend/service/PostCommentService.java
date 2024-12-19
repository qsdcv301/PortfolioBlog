package taehyeon.blog.backend.service;

import taehyeon.blog.backend.entity.PostComment;

import java.util.List;

public interface PostCommentService {
    List<PostComment> findAllByPostId(Long postId);

    PostComment create(PostComment postComment);

    void deleteById(long postId);
}
