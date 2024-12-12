package taehyeon.blog.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "mytimelines")
public class MyTimeLines {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jobtitle")
    private String jobtitle;

    @Column(name = "wheres")
    private String wheres;

    @Column(name = "wdate")
    private String wdate;

}
