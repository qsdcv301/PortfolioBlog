package taehyeon.blog.backend.service;

import taehyeon.blog.backend.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> getAllPosts();

    Optional<Post> getPostByPost(String post);

    Post createPost(Post post);

    void deletePost(Long id);

    Post updatePost(Long id, Post updatePost);
}
