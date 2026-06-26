package com.studyflow.backend.subject;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.studyflow.backend.model.SubjectModel;

public interface SubjectRepository extends JpaRepository<SubjectModel, Long> {
    List<SubjectModel> findByUserEmail(String email);

    boolean existsByNameAndUserEmail(String name, String email);

    Optional<SubjectModel> findByIdAndUserEmail(Long id, String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM SubjectModel s WHERE s.id = :id AND s.user.email = :email ")
    void deleteByIdAndUserEmail(Long id, String email);
}