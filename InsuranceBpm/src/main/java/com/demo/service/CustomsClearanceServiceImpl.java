package com.demo.service;

import com.demo.model.Customer;
import com.demo.model.Document;
import com.demo.model.VehicleClearance;
import com.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

public class CustomsClearanceServiceImpl implements CustomsClearanceService {


    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public void createClearanceApplication(Customer customer, Map<String, Document> documents) {

        customerRepository.save(customer);

    }

    @Override
    public List<VehicleClearance> getClearancesByBassportNumber(String passportNumber) {
        return null;
    }
}
