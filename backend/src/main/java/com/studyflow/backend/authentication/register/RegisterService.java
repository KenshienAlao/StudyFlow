package com.studyflow.backend.authentication.register;

import org.springframework.stereotype.Service;

import com.studyflow.backend.authentication.UsersRepository;
import com.studyflow.backend.model.UsersModel;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
class RegisterService {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public RegisterDto.Response register(RegisterDto entity) {
        if (usersRepository.existsByEmail(entity.email())) {
            throw new IllegalArgumentException("Email is already taken.");
        }

        if (!entity.password().equals(entity.confirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match.");
        }

        var savedUser = usersRepository.save(UsersModel.builder()
                .email(entity.email())
                .password(passwordEncoder.encode(entity.password()))
                .build());

        return new RegisterDto.Response(savedUser.getId(), savedUser.getEmail());
    }
}
