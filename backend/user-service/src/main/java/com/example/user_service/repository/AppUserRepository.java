package com.example.user_service.repository;

import com.example.user_service.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, String> {

    Optional<AppUser> findByUserName(String userName);

    Optional<AppUser> findByUserNameOrEmail(String userName, String email);
}
