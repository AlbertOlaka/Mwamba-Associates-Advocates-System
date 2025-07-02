package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Case;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaseRepository extends JpaRepository<Case, Long> {
}

