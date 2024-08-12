package com.vhub.v1.repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vhub.v1.model.*;

public interface JwtRepo extends JpaRepository<Token, String> {
    List<Token> findAllByCustomer_IdAndExpiredFalseAndRevokedFalse(int customerId);

    Optional<Token> findByToken(String token);
}
