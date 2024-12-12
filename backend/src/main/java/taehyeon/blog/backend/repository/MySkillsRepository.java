package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taehyeon.blog.backend.entity.MySkills;

public interface MySkillsRepository extends JpaRepository<MySkills, Long> {
}
