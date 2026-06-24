package com.studyflow.backend.profile;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studyflow.backend.model.ProfileModel;
import com.studyflow.backend.model.UsersModel;

@Repository
public interface ProfileRepository extends JpaRepository<ProfileModel, Long> {
    boolean existsByUser(UsersModel user);

    Optional<ProfileModel> findByUserEmail(String email);
}
