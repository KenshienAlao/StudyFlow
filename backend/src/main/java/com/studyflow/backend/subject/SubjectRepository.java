package com.studyflow.backend.subject;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studyflow.backend.model.SubjectModel;

public interface SubjectRepository extends JpaRepository<SubjectModel, Long> {
    List<SubjectModel> findByUserEmail(String email);

    boolean existsByNameAndUserEmail(String name, String email);

    Optional<SubjectModel> findByIdAndUserEmail(Long id, String email);
}