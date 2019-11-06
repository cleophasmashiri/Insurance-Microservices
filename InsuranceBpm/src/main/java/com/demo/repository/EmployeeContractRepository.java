package com.demo.repository;

import com.demo.model.EmployeeContract;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by cleophas on 2018/09/08.
 */
@Repository
public interface EmployeeContractRepository extends CrudRepository<EmployeeContract, Long> {
    List<EmployeeContract> findAll();
}
