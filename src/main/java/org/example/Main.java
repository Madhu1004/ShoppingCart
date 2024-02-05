package org.example;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://pratikucskmpj:1234@ecommerce.osbotjp.mongodb.net/PostIn?retryWrites=true&w=majority");
        MongoDatabase db = mongoClient.getDatabase("ShoppingCart");
        MongoCollection<Document> collection = db.getCollection("user");
        System.out.println(db);
        Document doc = new Document();
        doc.put("name","Pratik");
        collection.insertOne(doc);
    }
}