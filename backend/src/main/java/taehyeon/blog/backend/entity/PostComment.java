package taehyeon.blog.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;

@DynamicInsert
@Entity
@Data
@Table(name="post_comment")
public class PostComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "post_id")
    private Long postId;
    private String username;
    private String userEmail;
    private String social;

    @Column(columnDefinition = "TEXT")
    private String comment;

    @Column(name = "create_date", insertable=false, updatable = false)
    private LocalDateTime createDate;
}
