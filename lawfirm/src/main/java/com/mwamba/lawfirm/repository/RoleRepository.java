package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Role;
import com.mwamba.lawfirm.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName name);
    boolean existsByName(RoleName name);
}

