package com.example.ShoppingCart.Repository;

import com.example.ShoppingCart.Models.userModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userRepository extends MongoRepository<userModel, String> {
    // Additional custom queries can be added here if needed
}
