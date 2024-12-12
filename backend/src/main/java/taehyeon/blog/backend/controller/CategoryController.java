package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import taehyeon.blog.backend.entity.CategoryEntity;
import taehyeon.blog.backend.repository.CategoryRepository;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "/api")
@RequestMapping("/api")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryEntity>> getCategories() {
        List<CategoryEntity> categories = categoryRepository.findAll();
        return ResponseEntity.ok(categories);
    }

}
