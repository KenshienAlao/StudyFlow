package com.studyflow.backend.authentication.login;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studyflow.backend.common.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth/login")
class LoginController {

    private final LoginService loginService;

    @PostMapping
    ResponseEntity<ApiResponse<LoginDto.Response>> login(@Valid @RequestBody LoginDto entity) {
        return ResponseEntity.ok(ApiResponse.success("Login Success", loginService.login(entity)));
    }
}
