package com.studyflow.backend.authentication.register;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.studyflow.backend.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import lombok.RequiredArgsConstructor;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth/register")
@RequiredArgsConstructor
class RegisterController {
    private final RegisterService registerService;

    @PostMapping
    public ResponseEntity<ApiResponse<RegisterDto.Response>> register(@Valid @RequestBody RegisterDto entity) {
        return ResponseEntity.ok(ApiResponse.success("Register Success", registerService.register(entity)));
    }
}
