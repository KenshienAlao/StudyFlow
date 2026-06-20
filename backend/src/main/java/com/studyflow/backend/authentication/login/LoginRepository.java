package com.studyflow.backend.authentication.login;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studyflow.backend.model.UsersModel;

@Repository
interface LoginRepository extends JpaRepository<UsersModel, Long> {
    Optional<UsersModel> findByEmail(String email);
}
