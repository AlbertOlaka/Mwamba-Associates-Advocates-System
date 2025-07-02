package com.mwamba.lawfirm.service;

import com.mwamba.lawfirm.model.Appointment;
import com.mwamba.lawfirm.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public Appointment saveAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(Long id, Appointment updated) {
        return appointmentRepository.findById(id).map(existing -> {
            existing.setAppointmentDateTime(updated.getAppointmentDateTime());
            existing.setDescription(updated.getDescription());
            existing.setStatus(updated.getStatus());
            existing.setClient(updated.getClient());
            existing.setLawyer(updated.getLawyer());
            return appointmentRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Appointment not found"));
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}

