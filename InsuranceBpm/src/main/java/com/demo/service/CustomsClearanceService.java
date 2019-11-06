package com.demo.service;

import com.demo.model.Customer;
import com.demo.model.Document;
import com.demo.model.VehicleClearance;

import java.util.List;
import java.util.Map;

public interface CustomsClearanceService {

    void createClearanceApplication(Customer customer, Map<String, Document> documents);

    List<VehicleClearance> getClearancesByBassportNumber(String passportNumber);

}
