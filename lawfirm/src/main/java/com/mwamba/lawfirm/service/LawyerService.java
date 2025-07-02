package com.mwamba.lawfirm.service;

import com.mwamba.lawfirm.model.Lawyer;
import com.mwamba.lawfirm.repository.LawyerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LawyerService {

    private final LawyerRepository lawyerRepository;

    public LawyerService(LawyerRepository lawyerRepository) {
        this.lawyerRepository = lawyerRepository;
    }

    public List<Lawyer> getAllLawyers() {
        return lawyerRepository.findAll();
    }

    public Optional<Lawyer> getLawyerById(Long id) {
        return lawyerRepository.findById(id);
    }

    public Lawyer saveLawyer(Lawyer lawyer) {
        return lawyerRepository.save(lawyer);
    }

    public Lawyer updateLawyer(Long id, Lawyer updatedLawyer) {
        return lawyerRepository.findById(id)
                .map(lawyer -> {
                    lawyer.setFullName(updatedLawyer.getFullName());
                    lawyer.setEmail(updatedLawyer.getEmail());
                    lawyer.setPhone(updatedLawyer.getPhone());
                    lawyer.setSpecialization(updatedLawyer.getSpecialization());
                    return lawyerRepository.save(lawyer);
                })
                .orElseThrow(() -> new RuntimeException("Lawyer not found with id " + id));
    }

    public void deleteLawyer(Long id) {
        lawyerRepository.deleteById(id);
    }
}