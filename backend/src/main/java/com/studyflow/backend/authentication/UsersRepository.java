package com.studyflow.backend.authentication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studyflow.backend.model.UsersModel;

public interface UsersRepository extends JpaRepository<UsersModel, Long> {
    boolean existsByEmail(String email);

    Optional<UsersModel> findByEmail(String email);
}
