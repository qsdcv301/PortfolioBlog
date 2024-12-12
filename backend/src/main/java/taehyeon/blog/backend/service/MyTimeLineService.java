package taehyeon.blog.backend.service;

import taehyeon.blog.backend.entity.MyTimeLines;

import java.util.List;
import java.util.Optional;

public interface MyTimeLineService {
    MyTimeLines saveMySkills(MyTimeLines myTimeLines);

    Optional<MyTimeLines> updateMyTimeLines(Long id, MyTimeLines updateMyTimeLines);

    boolean deleteMyTimeLines(Long id);

    List<MyTimeLines> getAllMyTimeLines();
}
