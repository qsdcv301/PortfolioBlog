package taehyeon.blog.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taehyeon.blog.backend.entity.Post;
import taehyeon.blog.backend.entity.PostFile;
import taehyeon.blog.backend.repository.PostRepository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    private final PostFileServiceImpl postFileService;

    @Override
    public List<Post> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        posts.forEach(post -> {
            Optional<PostFile> firstImg = postFileService.findFirstImageByNtime(post.getNtime());
            post.setFirstImg(firstImg.map(PostFile::getNfilename).orElse(null));
        });
        return posts;
    }

    @Override
    public Optional<Post> getPostByPost(String post) {
        return postRepository.findByPost(post);
    }

    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Post updatePost(Long id, Post updatePost) {
        return postRepository.findById(id).map(existingPost -> {
            existingPost.setPost(updatePost.getPost());
            existingPost.setCategory(updatePost.getCategory());
            existingPost.setTitle(updatePost.getTitle());
            existingPost.setContent(updatePost.getContent());
            existingPost.setHashtag(updatePost.getHashtag());
            return postRepository.save(existingPost);
        }).orElseThrow(() -> new RuntimeException(id + "번 업데이트 에러"));
    }

}
