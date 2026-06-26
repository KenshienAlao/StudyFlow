package com.studyflow.backend.task;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studyflow.backend.common.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/task")
class TaskController {
    
    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<TaskDto>>> get(){
        return ResponseEntity.ok(ApiResponse.success("Task retrieved successfully", taskService.get() ));
    } 
    
    @PostMapping("/taskCreate")
    public ResponseEntity<ApiResponse<TaskDto>> create(@RequestBody TaskDto.Create entity) {
        return ResponseEntity.ok(ApiResponse.success("Task created successfully", taskService.create(entity)));
    }

    @PatchMapping("/taskUpdate")
    public ResponseEntity<ApiResponse<TaskDto>> update(@Valid @RequestBody TaskDto.Update entity) {
        return ResponseEntity.ok(ApiResponse.success("Task updated successfully", taskService.update(entity)));
    }

    @DeleteMapping("/taskDelete/{id}")
    public ResponseEntity<ApiResponse<TaskDto>> delete(@PathVariable Long id) {
        taskService.delete(id);
        return ResponseEntity.ok(ApiResponse.success("Task deleted successfully", null));
    }
}
