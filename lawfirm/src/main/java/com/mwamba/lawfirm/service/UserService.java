package com.mwamba.lawfirm.service;

import com.mwamba.lawfirm.model.Role;
import com.mwamba.lawfirm.model.RoleName;
import com.mwamba.lawfirm.model.User;
import com.mwamba.lawfirm.payload.RegisterRequest;
import com.mwamba.lawfirm.repository.RoleRepository;
import com.mwamba.lawfirm.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public User registerNewUser(RegisterRequest registerRequest) {
        // Create new user entity
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        // Assign CLIENT role by default
        Role clientRole = roleRepository.findByName(RoleName.ROLE_CLIENT)
                .orElseThrow(() -> new RuntimeException("Role not found"));

        user.setRoles(Collections.singleton(clientRole));

        return userRepository.save(user);
    }
}

