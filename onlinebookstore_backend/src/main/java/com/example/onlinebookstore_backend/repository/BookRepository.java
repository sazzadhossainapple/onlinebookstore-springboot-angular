package com.example.onlinebookstore_backend.repository;

import com.example.onlinebookstore_backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
