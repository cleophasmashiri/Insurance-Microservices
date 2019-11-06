package com.demo.repository;

import com.demo.model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by cleophas on 2018/09/08.
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Customer findByPassportNumber(String passportNumber);
}
