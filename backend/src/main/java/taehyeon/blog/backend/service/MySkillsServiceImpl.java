package taehyeon.blog.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taehyeon.blog.backend.entity.MySkills;
import taehyeon.blog.backend.repository.MySkillsRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MySkillsServiceImpl implements MySkillsService {

    private final MySkillsRepository mySkillsRepository;

    @Override
    public MySkills saveMySkills(MySkills mySkills) {
        return mySkillsRepository.save(mySkills);
    }

    @Override
    public Optional<MySkills> updateMySkills(Long id, MySkills updateMySkills) {
        return mySkillsRepository.findById(id).map(skill -> {
            skill.setName(updateMySkills.getName());
            skill.setValue(updateMySkills.getValue());
            return mySkillsRepository.save(skill);
        });
    }

    @Override
    public boolean deleteMySkills(Long id) {
        if (mySkillsRepository.existsById(id)) {
            mySkillsRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<MySkills> getAllMySkills() {
        return mySkillsRepository.findAll();
    }

}
