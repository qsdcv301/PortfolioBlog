package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import taehyeon.blog.backend.entity.MyTimeLines;
import taehyeon.blog.backend.service.MyTimeLineService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mytimelines")
public class MyTimeLinesController {

    private final MyTimeLineService myTimeLineService;

    @GetMapping
    public ResponseEntity<List<MyTimeLines>> getAllMySkills(){
        List<MyTimeLines> myTimeLines = myTimeLineService.getAllMyTimeLines();
        return ResponseEntity.ok(myTimeLines);
    }

}
