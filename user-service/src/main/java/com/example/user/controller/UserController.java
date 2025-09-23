package com.example.user.controller;

import com.example.user.model.User;
import com.example.user.repo.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
// TODO: hash password, validate
        return repository.save(user);
    }

    @GetMapping
    public List<User> all() {
        return repository.findAll();
    }
}