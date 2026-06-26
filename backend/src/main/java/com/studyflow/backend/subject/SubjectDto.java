package com.studyflow.backend.subject;

import jakarta.validation.constraints.NotNull;

public record SubjectDto(
                Long id,
                String name,
                String color,
                String description) {
        public record SubjectCreate(
                        @NotNull String name,
                        String color,
                        String description) {
        }

        public record SubjectUpdate(
                        @NotNull Long id,
                        String name,
                        String color,
                        String description) {
        }

}
