package com.demo;

import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableProcessApplication("CustomsProcess")
public class CustomsApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(CustomsApiApplication.class, args);
    }
}
