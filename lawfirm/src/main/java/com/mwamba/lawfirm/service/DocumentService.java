package com.mwamba.lawfirm.service;

import com.mwamba.lawfirm.model.Case;
import com.mwamba.lawfirm.model.Document;
import com.mwamba.lawfirm.repository.CaseRepository;
import com.mwamba.lawfirm.repository.DocumentRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final CaseRepository caseRepository;

    public DocumentService(DocumentRepository documentRepository, CaseRepository caseRepository) {
        this.documentRepository = documentRepository;
        this.caseRepository = caseRepository;
    }

    public Document uploadDocument(Long caseId, MultipartFile file) throws IOException {
        Case lawCase = caseRepository.findById(caseId)
                .orElseThrow(() -> new RuntimeException("Case not found"));

        String uploadDir = "uploads/";
        File uploadFolder = new File(uploadDir);
        if (!uploadFolder.exists()) {
            uploadFolder.mkdirs();
        }

        String filePath = uploadDir + file.getOriginalFilename();
        File destination = new File(filePath);
        file.transferTo(destination);

        Document doc = new Document();
        doc.setFileName(file.getOriginalFilename());
        doc.setFilePath(filePath);
        doc.setLawCase(lawCase);

        return documentRepository.save(doc);
    }

    public List<Document> getDocumentsByCaseId(Long caseId) {
        return documentRepository.findByLawCaseId(caseId);
    }
}

