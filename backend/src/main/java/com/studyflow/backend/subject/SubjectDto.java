package com.studyflow.backend.subject;

public record SubjectDto(
                Long id,
                String name,
                String color,
                String description) {
        public record SubjectCreate(
                        String name,
                        String color,
                        String description) {
        }

        public record SubjectUpdate(
                        Long id,
                        String name,
                        String color,
                        String description) {
        }

}
