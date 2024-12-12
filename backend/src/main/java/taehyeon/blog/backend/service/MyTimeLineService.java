package taehyeon.blog.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import taehyeon.blog.backend.entity.MyTimeLines;
import taehyeon.blog.backend.repository.MyTimeLinesRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MyTimeLineService {

    private final MyTimeLinesRepository myTimeLinesRepository;

    public MyTimeLines saveMySkills(MyTimeLines myTimeLines) {
        return myTimeLinesRepository.save(myTimeLines);
    }

    public Optional<MyTimeLines> updateMyTimeLines(Long id, MyTimeLines updateMyTimeLines) {
        return myTimeLinesRepository.findById(id).map(timeLines -> {
            timeLines.setJobtitle(updateMyTimeLines.getJobtitle());
            timeLines.setWheres(updateMyTimeLines.getWheres());
            timeLines.setWdate(updateMyTimeLines.getWdate());
            return myTimeLinesRepository.save(timeLines);
        });
    }

    public boolean deleteMyTimeLines(Long id) {
        if (myTimeLinesRepository.existsById(id)) {
            myTimeLinesRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<MyTimeLines> getAllMyTimeLines() {
        return myTimeLinesRepository.findAll();
    }

}
