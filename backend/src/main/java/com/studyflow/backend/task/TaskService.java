package com.studyflow.backend.task;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.studyflow.backend.authentication.UsersRepository;
import com.studyflow.backend.model.TaskModel;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class TaskService {
    private final TaskRepository taskRepository;
    private final UsersRepository userRepository;
    public List<TaskDto> get(){
        return taskRepository
                    .findByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                    .stream()
                    .map(t -> new TaskDto(t.getId(), t.getTitle(), t.getSubject(), t.getNotes(), t.getDueDate(), t.getPriority(), t.getStatus(), t.getCreatedAt(), t.getUpdatedAt()))
                    .toList();
    }

    public TaskDto create(TaskDto.Create entity){
        var user = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).orElseThrow(() -> new IllegalArgumentException("User not found"));

        var task = taskRepository.save(TaskModel.builder()
            .user(user)
            .title(entity.title())
            .subject(entity.subject())
            .notes(entity.notes())
            .dueDate(entity.due_date())
            .priority(entity.priority())
            .status("pending")
            .build());

        return new TaskDto(task.getId(), task.getTitle(), task.getSubject(), task.getNotes(), task.getDueDate(), task.getPriority(), task.getStatus(), task.getCreatedAt(), task.getUpdatedAt());
    }

    public TaskDto update(TaskDto.Update entity) {
        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        
        var task = taskRepository.findByIdAndUserEmail(entity.id(), email).orElseThrow(() -> new IllegalArgumentException("Task not found"));

        Optional.ofNullable(entity.title()).ifPresent(task::setTitle);
        Optional.ofNullable(entity.subject()).ifPresent(task::setSubject);
        Optional.ofNullable(entity.notes()).ifPresent(task::setNotes);
        Optional.ofNullable(entity.due_date()).ifPresent(task::setDueDate);
        Optional.ofNullable(entity.priority()).ifPresent(task::setPriority);
        Optional.ofNullable(entity.status()).ifPresent(task::setStatus);
        
        taskRepository.save(task);
        return new TaskDto(task.getId(), task.getTitle(), task.getSubject(), task.getNotes(), task.getDueDate(), task.getPriority(), task.getStatus(), task.getCreatedAt(), task.getUpdatedAt());
    }

    public void delete(Long id) {
        taskRepository.deleteByIdAndUserEmail(id, SecurityContextHolder.getContext().getAuthentication().getName());
    }
}
