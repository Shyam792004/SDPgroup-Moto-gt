package com.security.template.repo;

import com.security.template.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, String> {

    Optional<Token> findByToken(String token);

    List<Token> findAllByUser_IdAndExpiredFalseAndRevokedFalse(Long id);
}
