package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import taehyeon.blog.backend.entity.PostComment;
import taehyeon.blog.backend.service.PostCommentServiceImpl;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/posts/comment")
public class PostCommentController {

    private final PostCommentServiceImpl postCommentService;

    //목록
    @GetMapping
    public List<PostComment> getAllPostsComments(@RequestBody long postid){
        return postCommentService.findAllByPostId(postid);
    }

    //삭제


    //쓰기
    @PostMapping
    public PostComment createPostComment(@RequestBody PostComment postComment) {
        return postCommentService.create(postComment);
    }
}
