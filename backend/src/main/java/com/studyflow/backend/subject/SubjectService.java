package com.studyflow.backend.subject;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.studyflow.backend.authentication.UsersRepository;
import com.studyflow.backend.model.SubjectModel;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class SubjectService {
        private final SubjectRepository subjectRepository;
        private final UsersRepository usersRepository;

        public List<SubjectDto> get() {
                return subjectRepository
                                .findByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .stream()
                                .map(s -> new SubjectDto(s.getId(), s.getName(), s.getColor(), s.getDescription()))
                                .toList();
        }

        public SubjectDto subjectCreate(SubjectDto.SubjectCreate entity) {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();
                var user = usersRepository.findByEmail(email)
                                .orElseThrow(() -> new IllegalArgumentException("User not found"));

                if (subjectRepository.existsByNameAndUserEmail(entity.name(), email)) {
                        throw new IllegalArgumentException("Subject already exist");
                }

                var subject = subjectRepository.save(SubjectModel.builder()
                                .user(user)
                                .name(entity.name())
                                .color(entity.color())
                                .description(entity.description())
                                .build());

                return new SubjectDto(
                                subject.getId(),
                                subject.getName(),
                                subject.getColor(),
                                subject.getDescription());
        }

        public SubjectDto subjectUpdate(SubjectDto.SubjectUpdate entity) {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();
                var subject = subjectRepository.findByIdAndUserEmail(entity.id(), email)
                                .orElseThrow(() -> new IllegalArgumentException("Subject not found"));

                Optional.ofNullable(entity.name()).ifPresent(subject::setName);
                Optional.ofNullable(entity.color()).ifPresent(subject::setColor);
                Optional.ofNullable(entity.description()).ifPresent(subject::setDescription);

                subjectRepository.save(subject);
                return new SubjectDto(
                                subject.getId(),
                                subject.getName(),
                                subject.getColor(),
                                subject.getDescription());
        }

        public SubjectDto subjectDelete(Long id) {
                var email = SecurityContextHolder.getContext().getAuthentication().getName();
                var subject = subjectRepository.findByIdAndUserEmail(id, email)
                                .orElseThrow(() -> new IllegalArgumentException("Subject not found"));
                subjectRepository.delete(subject);
                return new SubjectDto(
                                subject.getId(),
                                subject.getName(),
                                subject.getColor(),
                                subject.getDescription());
        }
}
