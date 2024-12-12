package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taehyeon.blog.backend.entity.CategoryEntity;

import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    List<CategoryEntity> findAllByOrderByNumAsc();
}
