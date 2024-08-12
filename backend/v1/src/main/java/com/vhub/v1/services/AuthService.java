package com.vhub.v1.services;

import com.vhub.v1.dto.request.LoginRequest;
import com.vhub.v1.dto.request.RegisterRequest;
import com.vhub.v1.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}
