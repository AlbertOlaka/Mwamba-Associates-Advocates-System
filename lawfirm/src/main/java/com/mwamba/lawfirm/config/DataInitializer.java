package com.mwamba.lawfirm.config;

import com.mwamba.lawfirm.model.Role;
import com.mwamba.lawfirm.model.RoleName;
import com.mwamba.lawfirm.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;

    public DataInitializer(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) {
        for (RoleName roleName : RoleName.values()) {
            if (!roleRepository.existsByName(roleName)) {
                Role role = new Role();
                role.setName(roleName);
                roleRepository.save(role);
                System.out.println("Inserted role: " + roleName);
            }
        }
    }
}
