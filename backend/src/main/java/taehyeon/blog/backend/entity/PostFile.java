package taehyeon.blog.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "post_file")
public class PostFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ntime")
    private Long ntime;

    @Column(name = "nfilename")
    private String nfilename;

    @Column(name = "ofilename")
    private String ofilename;

    @Column(length = 5)
    private String ext;

    @Column(name = "fsize")
    private Long fsize;

}
