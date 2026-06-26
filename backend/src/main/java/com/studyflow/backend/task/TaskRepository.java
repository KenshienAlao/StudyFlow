package com.studyflow.backend.task;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.studyflow.backend.model.TaskModel;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, Long> {
    List<TaskModel> findByUserEmail(String email);

    boolean existsByIdAndUserEmail(Long id, String email);

    Optional<TaskModel> findByIdAndUserEmail(Long id, String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM TaskModel t WHERE t.id = :id AND t.user.email = :email ")
    void deleteByIdAndUserEmail(Long id, String email);
}
