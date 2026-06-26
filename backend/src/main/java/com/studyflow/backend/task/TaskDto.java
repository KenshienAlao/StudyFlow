package com.studyflow.backend.task;

record TaskDto(
    Long id,
    String title,
    String subject,
    String notes,
    String due_date,
    String priority,
    String status,
    String created_at,
    String updated_at
) {
    public record Create(
        String title,
        String subject,
        String notes,
        String due_date,
        String priority
    ) {
    }

    public record Update(
        Long id,
        String title,
        String subject,
        String notes,
        String due_date,
        String priority,
        String status
    ) {
    }
    
}
