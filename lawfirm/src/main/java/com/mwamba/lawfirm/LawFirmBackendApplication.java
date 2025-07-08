package com.mwamba.lawfirm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mwamba.lawfirm.model.Role;
import com.mwamba.lawfirm.model.RoleName;
import com.mwamba.lawfirm.repository.RoleRepository;

@SpringBootApplication
public class LawFirmBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(LawFirmBackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner initRoles(RoleRepository roleRepository) {
        return args -> {
            for (RoleName roleName : RoleName.values()) {
                if (roleRepository.findByName(roleName).isEmpty()) {
                    roleRepository.save(new Role(roleName));
                }
            }
        };
    }

}
