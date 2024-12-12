package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taehyeon.blog.backend.entity.Post;

import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    //post 기준으로 검색
    Optional<Post> findByPost(String post);
}