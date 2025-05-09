package com.example.gateway_service.Security;

import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
public class RequestLoggingFilter implements WebFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        // Log the incoming request URL
        System.out.println("Incoming Request: " + exchange.getRequest().getURI());

        // Proceed with the chain
        return chain.filter(exchange);
    }
}
