package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Lawyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LawyerRepository extends JpaRepository<Lawyer, Long> {
}
