package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import taehyeon.blog.backend.entity.Post;
import taehyeon.blog.backend.service.PostService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    //목록보기
    @GetMapping
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    //세부내용보기
    @GetMapping("/{post}")
    public Post getPostByPost(@PathVariable String post){
        return postService.getPostByPost(post).orElseThrow(()->new RuntimeException("내용이 없습니다."));
    }

    //쓰기
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

}
