package com.example.user_service.controller;
import com.example.user_service.dto.*;
import com.example.user_service.model.AppUser;
import com.example.user_service.security.util.JwtUtil;
import com.example.user_service.service.AppUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final AuthenticationManager authenticationManager;
    private final AppUserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        if (userService.findByUserNameOrEmail(request.userName(), request.email()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    Map.of("status", HttpStatus.CONFLICT, "payload", "User already exists.")
            );
        }
        String role;
        if (request.email().endsWith("@mytailorshop.com")) {
            role = "ADMIN";
        } else if (request.email().contains("tailor")) {
            role = "TAILOR";
        } else {
            role = "CUSTOMER";
        }
        var user = new AppUser(request.userName(),
                passwordEncoder.encode(request.password()),
                request.email(), Set.of(role));
        userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        if (userService.findByUserName(request.userName()).isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(
                            Map.of("status", HttpStatus.UNAUTHORIZED, "payload", "User does not exists")
                    );
        }
        var unAuthenticatedUser = new UsernamePasswordAuthenticationToken(
                request.userName(), request.password()
        );
        // Authenticate the user
        Authentication authenticatedUser =
                authenticationManager.authenticate(unAuthenticatedUser);
        String token = jwtUtil.generateToken((UserDetails) authenticatedUser.getPrincipal());
        return ResponseEntity.ok(Map.of("status", HttpStatus.OK, "token", token));

    }


}
