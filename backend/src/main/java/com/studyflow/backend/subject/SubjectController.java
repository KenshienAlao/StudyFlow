package com.studyflow.backend.subject;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.studyflow.backend.common.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subject")
class SubjectController {
    private final SubjectService subjectService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<SubjectDto>>> get() {
        return ResponseEntity.ok(ApiResponse.success("Subject retrieved successfully", subjectService.get()));
    }

    @PostMapping("/subjectCreate")
    public ResponseEntity<ApiResponse<SubjectDto>> subjectCreate(@Valid @RequestBody SubjectDto.SubjectCreate entity) {
        return ResponseEntity
                .ok(ApiResponse.success("Subject created successfully", subjectService.subjectCreate(entity)));
    }

    @PatchExchange("/subjectUpdate")
    public ResponseEntity<ApiResponse<SubjectDto>> subjectUpdate(@Valid @RequestBody SubjectDto.SubjectUpdate entity) {
        return ResponseEntity
                .ok(ApiResponse.success("Subject updated successfully", subjectService.subjectUpdate(entity)));
    }

    @DeleteMapping("/subjectDelete/{id}")
    public ResponseEntity<ApiResponse<SubjectDto>> subjectDelete(@PathVariable Long id) {
        subjectService.subjectDelete(id);
        return ResponseEntity.ok(ApiResponse.success("Subject deleted successfully", null));
    }

}