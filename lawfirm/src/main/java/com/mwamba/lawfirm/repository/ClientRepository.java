package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}

