package com.demo.delegates;

import com.demo.model.InsurancePolicy;
import com.demo.model.VehicleType;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by cleophas on 2018/08/02.
 */

@Component
public class CreateQuote implements JavaDelegate {

    private static final Logger LOGGER = LoggerFactory.getLogger(CreateQuote.class);

    private String getValueFromDelegate(String name, DelegateExecution delegateExecution) {
        if (delegateExecution.getVariable(name) != null) {
            return delegateExecution.getVariable(name).toString();
        }
        return "";
    }

    private int getIntValueFromDelegate(String name, DelegateExecution delegateExecution) {
        if (delegateExecution.getVariable(name) != null) {
            String stringVal = delegateExecution.getVariable(name).toString();
            return Integer.parseInt(stringVal);
        }
        return 0;
    }

    private double getDoubleValueFromDelegate(String name, DelegateExecution delegateExecution) {
        if (delegateExecution.getVariable(name) != null) {
            String stringVal = delegateExecution.getVariable(name).toString();
            return Double.parseDouble(stringVal);
        }
        return 0.0;
    }

    private Date getDateValueFromDelegate(String name, DelegateExecution delegateExecution) {
        if (delegateExecution.getVariable(name) != null) {
            String stringVal = delegateExecution.getVariable(name).toString();
            return new Date(stringVal);
        }
        return new Date();
    }

    private VehicleType getVehicleTypeValueFromDelegate(String name, DelegateExecution delegateExecution) {
        if (delegateExecution.getVariable(name) != null) {
            String stringVal = delegateExecution.getVariable(name).toString();
            return VehicleType.valueOf(stringVal);
        }
        return null;
    }

    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
//        InsurancePolicy policy = new InsurancePolicy();
//        policy.setPolicyNumber("P20009");
//        delegateExecution.setVariable("policy", policy);
    }

}
