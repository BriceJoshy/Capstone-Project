package com.example.measurement_service.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String SECRET;

    private final long EXP_TIME = 86400000L;

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder().setSubject(userDetails.getUsername()).claim("roles", this.getUserRoles(userDetails.getAuthorities())).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 86400000L)).signWith(SignatureAlgorithm.HS256, this.SECRET).compact();
    }

    private List<String> getUserRoles(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream().map(GrantedAuthority::getAuthority).toList();
    }

    public String extractUserName(String token) {
        return this.getBody(token).getSubject();
    }

    private Claims getBody(String token) {
        return (Claims)Jwts.parser().setSigningKey(this.SECRET).parseClaimsJws(token).getBody();
    }

    public List<String> extractRoles(String token) {
        return (List)this.getBody(token).get("roles", List.class);
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        return this.extractUserName(token).equals(userDetails.getUsername()) && !this.isTokenExpired(token);
    }

    public boolean isTokenExpired(String token) {
        return this.getBody(token).getExpiration().before(new Date());
    }
}