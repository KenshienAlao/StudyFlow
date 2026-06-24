package com.studyflow.backend.profile;

import jakarta.servlet.http.HttpServletResponse;

import java.util.Optional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.studyflow.backend.authentication.UsersRepository;
import com.studyflow.backend.model.ProfileModel;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class ProfileService {

        private final ProfileRepository profileRepository;
        private final UsersRepository usersRepository;
        private final HttpServletResponse response;

        public ProfileDto get() {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();
                var profile = profileRepository.findByUserEmail(email)
                                .orElseThrow(() -> new IllegalArgumentException("Profile not found"));

                return new ProfileDto(
                                email,
                                profile.getFirstName(),
                                profile.getLastName(),
                                profile.getGender(),
                                profile.getDateOfBirth(),
                                profile.getGoal());
        }

        public ProfileDto setup(ProfileDto.Setup entity) {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();

                var user = usersRepository.findByEmail(email)
                                .orElseThrow(() -> new IllegalArgumentException("User not found"));

                if (profileRepository.existsByUser(user)) {
                        throw new IllegalArgumentException("Profile already exists.");
                }

                var profile = profileRepository.save(ProfileModel.builder()
                                .firstName(entity.firstName())
                                .lastName(entity.lastName())
                                .gender(entity.gender())
                                .dateOfBirth(entity.dateOfBirth())
                                .goal(entity.goal())
                                .agreedToTermsAndConditions(entity.agreedToTermsAndConditions())
                                .user(user)
                                .build());

                response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from("is_first_time", "false")
                                .httpOnly(true).secure(true).path("/").maxAge(604800).sameSite("None").build()
                                .toString());

                return new ProfileDto(
                                email,
                                profile.getFirstName(),
                                profile.getLastName(),
                                profile.getGender(),
                                profile.getDateOfBirth(),
                                profile.getGoal());
        }

        public ProfileDto update(ProfileDto.Update entity) {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();

                var profile = profileRepository.findByUserEmail(email)
                                .orElseThrow(() -> new IllegalArgumentException("Profile not found"));

                Optional.ofNullable(entity.firstName()).ifPresent(profile::setFirstName);
                Optional.ofNullable(entity.lastName()).ifPresent(profile::setLastName);
                Optional.ofNullable(entity.dateOfBirth()).ifPresent(profile::setDateOfBirth);
                Optional.ofNullable(entity.gender()).ifPresent(profile::setGender);

                profileRepository.save(profile);

                return new ProfileDto(
                                email,
                                profile.getFirstName(),
                                profile.getLastName(),
                                profile.getGender(),
                                profile.getDateOfBirth(),
                                profile.getGoal());
        }
}
