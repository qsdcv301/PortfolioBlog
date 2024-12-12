package taehyeon.blog.backend.service;

import taehyeon.blog.backend.entity.MySkills;

import java.util.List;
import java.util.Optional;

public interface MySkillsService {

    MySkills saveMySkills(MySkills mySkills);

    Optional<MySkills> updateMySkills(Long id, MySkills updateMySkills);

    boolean deleteMySkills(Long id);

    List<MySkills> getAllMySkills();
}
