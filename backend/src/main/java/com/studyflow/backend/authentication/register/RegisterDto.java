package com.studyflow.backend.authentication.register;

import jakarta.validation.constraints.NotBlank;

record RegisterDto(
        @NotBlank(message = "Email is required") String email,
        @NotBlank(message = "Password is required") String password,
        @NotBlank(message = "Confirm password is required") String confirmPassword) {
    record Response(Long id, String email) {
    }
}
