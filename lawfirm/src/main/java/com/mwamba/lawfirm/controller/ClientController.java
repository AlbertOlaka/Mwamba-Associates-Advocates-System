package com.mwamba.lawfirm.controller;

import com.mwamba.lawfirm.model.Client;
import com.mwamba.lawfirm.service.ClientService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:5173") // Frontend port
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

     // Only ADMIN and LAWYER can see all clients
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_LAWYER')")
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    // Any authenticated user can get their client profile (example logic; update if needed)
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_LAWYER', 'ROLE_CLERK', 'ROLE_CLIENT')")
    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Optional<Client> client = clientService.getClientById(id);
        return client.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

       // Only ADMIN or CLERK can create new clients
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CLERK')")
    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return clientService.createClient(client);
    }

     // Only ADMIN or LAWYER can update
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_LAWYER')")
    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client updatedClient) {
        try {
            Client client = clientService.updateClient(id, updatedClient);
            return ResponseEntity.ok(client);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Only ADMIN can delete
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }
}
