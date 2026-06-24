package com.studyflow.backend.authentication.refresh;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.studyflow.backend.common.ApiResponse;
import com.studyflow.backend.config.JwtTokenConfig;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
class RefreshController {

    private final JwtTokenConfig jwtTokenConfig;

    @PostMapping("/refresh")
    ApiResponse<Void> refresh(HttpServletRequest request, HttpServletResponse response) {
        var cookie = WebUtils.getCookie(request, "refresh_token");
        if (cookie == null)
            throw new IllegalArgumentException("Missing refresh token.");

        var accessToken = jwtTokenConfig.generateAccessToken(jwtTokenConfig.extractEmail(cookie.getValue()));
        response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from("access_token", accessToken)
                .httpOnly(true).secure(true).path("/").maxAge(900).sameSite("None").build().toString());

        return ApiResponse.success("Token refreshed.", null);
    }
}