package com.example.onlinebookstore_backend.repository;

import com.example.onlinebookstore_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
