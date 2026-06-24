package com.studyflow.backend.profile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studyflow.backend.common.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/profile")
class ProfileController {

    private final ProfileService profileService;

    @GetMapping
    public ResponseEntity<ApiResponse<ProfileDto>> get() {
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved successfully", profileService.get()));
    }

    @PostMapping("/setup")
    public ResponseEntity<ApiResponse<ProfileDto>> setup(@Valid @RequestBody ProfileDto.Setup entity) {
        return ResponseEntity.ok(ApiResponse.success("Profile setup successfully", profileService.setup(entity)));
    }

    @PatchMapping("/update")
    public ResponseEntity<ApiResponse<ProfileDto>> update(@Valid @RequestBody ProfileDto.Update entity) {
        return ResponseEntity.ok(ApiResponse.success("Profile updated successfully", profileService.update(entity)));
    }
}
