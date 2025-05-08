package com.example.user_service.service;

import com.example.user_service.model.AppUser;
import com.example.user_service.repository.AppUserRepository;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private final AppUserRepository repository;

    public Optional<AppUser> findByUserName(String userName) {
        return repository.findByUserName(userName);
    }

    public AppUser save(AppUser user) {
        return repository.save(user);
    }

    public Optional<AppUser> findByUserNameOrEmail(@NotBlank(message = "Value cannot be blank") String userName,
                                                   @Email(message = "Provide a valid email") @NotBlank(message = "Email cannot be blank") String email) {
        return repository.findByUserNameOrEmail(userName, email);
    }
}
