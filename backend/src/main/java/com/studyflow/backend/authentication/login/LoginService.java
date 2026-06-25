package com.studyflow.backend.authentication.login;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.studyflow.backend.authentication.UsersRepository;
import com.studyflow.backend.config.JwtTokenConfig;

import jakarta.servlet.http.HttpServletResponse;

import com.studyflow.backend.profile.ProfileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class LoginService {

    private final UsersRepository usersRepository;
    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenConfig jwtTokenConfig;
    private final HttpServletResponse response;

    LoginDto.Response login(LoginDto entity) {
        var user = usersRepository.findByEmail(entity.email())
                .filter(u -> passwordEncoder.matches(entity.password(), u.getPassword()))
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));

        var email = user.getEmail();
        setCookie("access_token", jwtTokenConfig.generateAccessToken(email), 900); // 15 mins
        setCookie("refresh_token", jwtTokenConfig.generateRefreshToken(email), 604800); // 7 days

        boolean isFirstTime = !profileRepository.existsByUser(user);
        setCookie("is_first_time", String.valueOf(isFirstTime), 604800); // 7 days
        return new LoginDto.Response(isFirstTime);
    }

    private void setCookie(String name, String value, long maxAge) {
        response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from(name, value)
                .httpOnly(true).secure(true).path("/").maxAge(maxAge).sameSite("None").build().toString() + "; Partitioned");
    }
}
