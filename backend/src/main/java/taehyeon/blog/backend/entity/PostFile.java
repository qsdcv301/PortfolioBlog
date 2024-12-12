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
    private Long nTime;

    @Column(name = "nfilename")
    private String nFileName;

    @Column(name = "ofilename")
    private String oFileName;

    @Column(length = 5)
    private String ext;

    @Column(name = "fsize")
    private Long fSize;

}
