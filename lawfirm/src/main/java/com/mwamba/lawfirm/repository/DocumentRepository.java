package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByLawCaseId(Long caseId);
}

