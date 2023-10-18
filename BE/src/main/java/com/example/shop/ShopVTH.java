package com.example.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class ShopVTH {

    public static void main(String[] args) {
        SpringApplication.run(ShopVTH.class, args);
    }

}
