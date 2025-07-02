package com.mwamba.lawfirm.service;

import com.mwamba.lawfirm.model.Case;
import com.mwamba.lawfirm.repository.CaseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaseService {

    private final CaseRepository caseRepository;

    public CaseService(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }

    public List<Case> getAllCases() {
        return caseRepository.findAll();
    }

    public Optional<Case> getCaseById(Long id) {
        return caseRepository.findById(id);
    }

    public Case saveCase(Case newCase) {
        return caseRepository.save(newCase);
    }

    public Case updateCase(Long id, Case updatedCase) {
        return caseRepository.findById(id).map(existingCase -> {
            existingCase.setCaseNumber(updatedCase.getCaseNumber());
            existingCase.setCaseType(updatedCase.getCaseType());
            existingCase.setDescription(updatedCase.getDescription());
            existingCase.setOpenedDate(updatedCase.getOpenedDate());
            existingCase.setClosedDate(updatedCase.getClosedDate());
            existingCase.setClient(updatedCase.getClient());
            existingCase.setLawyer(updatedCase.getLawyer());
            return caseRepository.save(existingCase);
        }).orElseThrow(() -> new RuntimeException("Case not found with ID: " + id));
    }

    public void deleteCase(Long id) {
        caseRepository.deleteById(id);
    }
}

