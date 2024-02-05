package com.example.ShoppingCart.Service;

import com.example.ShoppingCart.Models.userModel;
import com.example.ShoppingCart.Repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userService {
    @Autowired
    private userRepository userRepo;

    public List<userModel> getAllUser() {
        System.out.println(userRepo.findAll());
        return userRepo.findAll();
    }


}
