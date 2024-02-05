package com.example.ShoppingCart.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class userModel {
    @Id
    private String id;

    private String name;
    private String password;

    public userModel(String name, String password) {
        this.name = name;
        this.password = password;
    }

    @Override
    public String toString() {
        return "id : " +  id + " , \nName : " + name;
    }
}
