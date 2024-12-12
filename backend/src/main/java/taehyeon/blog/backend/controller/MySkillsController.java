package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import taehyeon.blog.backend.entity.MySkills;
import taehyeon.blog.backend.service.MySkillsService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/myskills")
public class MySkillsController {

    private final MySkillsService mySkillsService;

    @GetMapping
    public ResponseEntity<List<MySkills>> getAllMySkills(){
        List<MySkills> mySkills = mySkillsService.getAllMySkills();
        return ResponseEntity.ok(mySkills);
    }

}
