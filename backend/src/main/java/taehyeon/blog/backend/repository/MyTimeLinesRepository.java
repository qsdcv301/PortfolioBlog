package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taehyeon.blog.backend.entity.MyTimeLines;

public interface MyTimeLinesRepository extends JpaRepository<MyTimeLines, Long> {
}
