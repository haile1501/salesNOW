package com.hust.salesnowbe.dto.auth;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class VerifyTokenRequest {

    @NotNull
    private String token;
}
