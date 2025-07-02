package com.mwamba.lawfirm.controller;

import com.mwamba.lawfirm.model.Document;
import com.mwamba.lawfirm.service.DocumentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "http://localhost:5173")
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping("/upload/{caseId}")
    public ResponseEntity<Document> uploadDocument(
            @PathVariable Long caseId,
            @RequestParam("file") MultipartFile file) {

        try {
            Document doc = documentService.uploadDocument(caseId, file);
            return new ResponseEntity<>(doc, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/case/{caseId}")
    public List<Document> getDocumentsByCase(@PathVariable Long caseId) {
        return documentService.getDocumentsByCaseId(caseId);
    }
}

