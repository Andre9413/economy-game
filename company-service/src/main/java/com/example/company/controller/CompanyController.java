package com.example.company.controller;

import com.example.company.model.Company;
import com.example.company.repo.CompanyRepository;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {
    private final CompanyRepository repository;


    public CompanyController(CompanyRepository repository) {
        this.repository = repository;
    }


    @PostMapping
    public Company create(@RequestBody Company company) {
        return repository.save(company);
    }


    @GetMapping
    public List<Company> all() {
        return repository.findAll();
    }


    @GetMapping("/{id}")
    public Company get(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}