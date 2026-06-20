package com.studyflow.backend.authentication.register;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studyflow.backend.model.UsersModel;

@Repository
interface RegisterRepository extends JpaRepository<UsersModel, Long> {
    boolean existsByEmail(String email);
}
