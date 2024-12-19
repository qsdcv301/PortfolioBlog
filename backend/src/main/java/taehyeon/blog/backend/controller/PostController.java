package taehyeon.blog.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import taehyeon.blog.backend.entity.Post;
import taehyeon.blog.backend.service.PostServiceImpl;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostServiceImpl postServiceImpl;

    //목록보기
    @GetMapping
    public List<Post> getAllPosts(){
        return postServiceImpl.getAllPosts();
    }

    //세부내용보기
    @GetMapping("/{post}")
    public Post getPostByPost(@PathVariable(name = "post") String post){
        return postServiceImpl.getPostByPost(post).orElseThrow(()->new RuntimeException("내용이 없습니다."));
    }

    //쓰기
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postServiceImpl.createPost(post);
    }

}
