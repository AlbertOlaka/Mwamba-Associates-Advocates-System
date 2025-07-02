package com.mwamba.lawfirm.repository;

import com.mwamba.lawfirm.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
