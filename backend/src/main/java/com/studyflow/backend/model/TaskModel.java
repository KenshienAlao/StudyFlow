package com.studyflow.backend.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tasks")
public class TaskModel {
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private UsersModel user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String title;

    @Column(nullable = true)
    private String subject;

    @Column(nullable = true)
    private String notes;

    @Column(nullable = true)
    private String dueDate;

    @Column(nullable = true)
    private String priority;

    @Column(nullable = true)
    private String status;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private String createdAt;

    @UpdateTimestamp
    @Column(nullable = true)
    private String updatedAt;

    
}
