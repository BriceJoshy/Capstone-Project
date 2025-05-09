package com.example.gateway_service.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import java.nio.charset.StandardCharsets;

public class JwtFilter {

    private static final String SECRET_KEY = "fa04ba3741c723e9509224985307f1837da2186aca4c92e4931c854ddf711b5e";

    public Claims validateTokenAndExtractClaims(String token) {
        try {
            // Convert the secret key to byte[] to avoid deprecated method
            byte[] secretKeyBytes = SECRET_KEY.getBytes(StandardCharsets.UTF_8);

            // Build the JWT parser using the byte array for the signing key
            JwtParser parser = Jwts.parserBuilder()
                    .setSigningKey(secretKeyBytes)  // Use the byte array for the signing key
                    .build();  // Create the immutable parser

            // Parse the token and extract the claims
            Claims claims = parser.parseClaimsJws(token).getBody();
            return claims;  // Return the claims object if the token is valid
        } catch (Exception e) {
            // Handle invalid token or any other parsing issues
            System.out.println("Invalid token: " + e.getMessage());
            return null;
        }
    }
}
