package com.demo.service;

import com.demo.model.ContractTask;
import com.demo.model.EmployeeContract;

import java.util.List;

/**
 * Created by cleophas on 2018/09/01.
 */

public interface ContractService {

    EmployeeContract getContract(long contractId);

    void createContract(EmployeeContract contract);

    List<ContractTask> getTasks(String processInstanceId);

    List<EmployeeContract> getContracts();

    void accountManagerApprove(String taskId);

    void seniorManagerApprove(String taskId);

    void candidateApproval(String taskId);

    void cancelContract(String processInstanceId);

    List<ContractTask> getAllTasks();
}
