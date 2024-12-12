package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taehyeon.blog.backend.entity.PostFile;

public interface PostFileRepository extends JpaRepository<PostFile, Long> {
}
