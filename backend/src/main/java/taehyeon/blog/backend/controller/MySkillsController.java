package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import taehyeon.blog.backend.entity.MySkills;
import taehyeon.blog.backend.service.MySkillsServiceImpl;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/myskills")
public class MySkillsController {

    private final MySkillsServiceImpl mySkillsServiceImpl;

    @GetMapping
    public ResponseEntity<List<MySkills>> getAllMySkills(){
        List<MySkills> mySkills = mySkillsServiceImpl.getAllMySkills();
        return ResponseEntity.ok(mySkills);
    }

}
