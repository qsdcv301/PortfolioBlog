package taehyeon.blog.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import taehyeon.blog.backend.entity.PostFile;

import java.util.List;
import java.util.Optional;

public interface PostFileRepository extends JpaRepository<PostFile, Long> {
    List<PostFile> findAllByNtime(Long ntime);
    void deleteAllByNtime(Long ntime);

    @Query(value="SELECT * FROM post_file WHERE ntime = :nTime AND nfilename NOT LIKE 'file_%' ORDER BY id ASC LIMIT 1", nativeQuery=true)
    Optional<PostFile> findFirstImageByNtime(@Param("nTime") Long nTime);

}
