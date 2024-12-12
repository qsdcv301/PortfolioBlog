package taehyeon.blog.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "post_category")
@Data
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "num")
    private int num;

}
