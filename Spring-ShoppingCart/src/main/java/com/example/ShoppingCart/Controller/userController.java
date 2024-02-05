package com.example.ShoppingCart.Controller;

import com.example.ShoppingCart.Models.userModel;
import com.example.ShoppingCart.Service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class userController {

    @Autowired
    private userService userService;

    @GetMapping
    public String getAllUser() {
        return userService.getAllUser().toString();
    }
}
