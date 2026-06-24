package com.studyflow.backend.profile;

record ProfileDto(
                String email,
                String firstName,
                String lastName,
                String gender,
                String dateOfBirth,
                String goal) {

        record Setup(
                        String firstName,
                        String lastName,
                        String gender,
                        String dateOfBirth,
                        String goal,
                        boolean agreedToTermsAndConditions) {
        }

        record Update(
                        String firstName,
                        String lastName,
                        String dateOfBirth,
                        String gender) {
        }
}
