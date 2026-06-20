package com.studyflow.backend.authentication.login;

import jakarta.validation.constraints.NotBlank;

record LoginDto(
        @NotBlank(message = "Email is required") String email,
        @NotBlank(message = "Password is required") String password) {
    record Response(Long id, String email) {
    }
}
