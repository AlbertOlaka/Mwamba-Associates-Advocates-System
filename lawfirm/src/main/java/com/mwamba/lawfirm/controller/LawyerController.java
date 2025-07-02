package com.mwamba.lawfirm.controller;

import com.mwamba.lawfirm.model.Lawyer;
import com.mwamba.lawfirm.service.LawyerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lawyers")
@CrossOrigin(origins = "http://localhost:5173")
public class LawyerController {

    private final LawyerService lawyerService;

    public LawyerController(LawyerService lawyerService) {
        this.lawyerService = lawyerService;
    }

    @GetMapping
    public List<Lawyer> getAllLawyers() {
        return lawyerService.getAllLawyers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lawyer> getLawyerById(@PathVariable Long id) {
        Optional<Lawyer> lawyer = lawyerService.getLawyerById(id);
        return lawyer.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Lawyer addLawyer(@RequestBody Lawyer lawyer) {
        return lawyerService.saveLawyer(lawyer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lawyer> updateLawyer(@PathVariable Long id, @RequestBody Lawyer updatedLawyer) {
        try {
            Lawyer lawyer = lawyerService.updateLawyer(id, updatedLawyer);
            return ResponseEntity.ok(lawyer);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLawyer(@PathVariable Long id) {
        lawyerService.deleteLawyer(id);
        return ResponseEntity.noContent().build();
    }
}
