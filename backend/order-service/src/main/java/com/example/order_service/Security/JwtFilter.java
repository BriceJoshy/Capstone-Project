package com.example.order_service.Security;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;

    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);

            try {
                if (this.jwtUtil.isTokenExpired(token)) {
                    response.setStatus(401);
                    response.getWriter().write("Token expired");
                    return;
                }

                String userName = this.jwtUtil.extractUserName(token);
                List<String> roles = this.jwtUtil.extractRoles(token);
                if (userName != null) {
                    List<SimpleGrantedAuthority> authorities = (List)roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userName, (Object)null, authorities);
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            } catch (ExpiredJwtException var9) {
                response.setStatus(401);
                response.getWriter().write("Token expired");
                return;
            } catch (SignatureException var10) {
                response.setStatus(401);
                response.getWriter().write("Invalid signature");
                return;
            } catch (Exception e) {
                response.setStatus(401);
                response.getWriter().write("Token error: " + e.getMessage());
                return;
            }
        }

        filterChain.doFilter(request, response);
    }
}