package com.demo.policy;


import org.camunda.bpm.engine.impl.util.ClockUtil;
import org.camunda.bpm.engine.runtime.Job;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.camunda.bpm.engine.variable.Variables;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.camunda.bpm.engine.test.assertions.ProcessEngineAssertions.assertThat;
import static org.camunda.bpm.engine.test.assertions.ProcessEngineTests.task;
import static org.camunda.bpm.engine.test.assertions.bpmn.AbstractAssertions.processEngine;
import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.complete;

@RunWith(SpringRunner.class)
@SpringBootTest
@Deployment(resources = "policy-process.bpmn")
public class InsurancePolicyTest {

    @Test
    public void givenCustomerSubmittedQuoteWhenMeetsCriteriaAndCustomerAcceptedThenPolicyGenerated() {

        Map<String, Object> submittedQuote = new HashMap<>();

        ProcessInstance processInstance = processEngine().getRuntimeService().startProcessInstanceByKey("policyprocess", submittedQuote);

        assertThat(processInstance)
                .isStarted()
        .hasPassed("submit_new_quote", "create_quote")
        .isWaitingAt("assess_quote")
        .task()
        .hasCandidateGroup("consultant");

        complete(task(), Variables.createVariables().putValue("approveQuote", Boolean.TRUE));

        assertThat(processInstance)
                .hasPassed("approved_quote_gateway", "approved_quote")
        .isWaitingAt("customer_accept_reject_quote")
        .task().hasCandidateGroup("customer");

        complete(task(), Variables.createVariables().putValue("customerAcceptQuote", Boolean.TRUE));

        assertThat(processInstance)
                .hasPassed("customer_accept_reject_quote_gateway", "generate_policy")
        .isEnded();

    }

    @Test
    public void givenCustomerSubmittedQuoteWhenMeetsCriteriaAndCustomerRejectedThenRejectMailSent() {

        Map<String, Object> submittedQuote = new HashMap<>();

        ProcessInstance processInstance = processEngine().getRuntimeService().startProcessInstanceByKey("policyprocess", submittedQuote);

        assertThat(processInstance)
                .isStarted()
                .hasPassed("submit_new_quote", "create_quote")
                .isWaitingAt("assess_quote")
                .task()
                .hasCandidateGroup("consultant");

        complete(task(), Variables.createVariables().putValue("approveQuote", Boolean.TRUE));

        assertThat(processInstance)
                .hasPassed("approved_quote_gateway", "approved_quote")
                .isWaitingAt("customer_accept_reject_quote")
                .task().hasCandidateGroup("customer");

        complete(task(), Variables.createVariables().putValue("customerAcceptQuote", Boolean.FALSE));

        assertThat(processInstance)
                .hasPassed("customer_accept_reject_quote_gateway", "customer_reject_email")
                .isEnded();

    }

    @Test
    public void givenCustomerSubmittedQuoteWhenDoesNotMeetsCriteriaThenRejectMailSent() {

        Map<String, Object> submittedQuote = new HashMap<>();

        ProcessInstance processInstance = processEngine().getRuntimeService().startProcessInstanceByKey("policyprocess", submittedQuote);

        assertThat(processInstance)
                .isStarted()
                .hasPassed("submit_new_quote", "create_quote")
                .isWaitingAt("assess_quote")
                .task()
                .hasCandidateGroup("consultant");

        complete(task(), Variables.createVariables().putValue("approveQuote", Boolean.FALSE));

        assertThat(processInstance)
                .hasPassed("send_consultant_rejected_email")
                .isEnded();

    }

    @Test
    public void givenCustomerSubmittedQuoteWhenConsultantTakesMoreThanOneDayThenReminderEmailSent() {

        Map<String, Object> submittedQuote = new HashMap<>();

        ProcessInstance processInstance = processEngine().getRuntimeService().startProcessInstanceByKey("policyprocess", submittedQuote);

        assertThat(processInstance)
                .isStarted()
                .hasPassed("submit_new_quote", "create_quote")
                .isWaitingAt("assess_quote")
                .task()
                .hasCandidateGroup("consultant");

        long time = ClockUtil.getCurrentTime().getTime();
        long seconds = 10 * 24 * 60 * 60;
        ClockUtil.setCurrentTime(new Date(time+seconds*1000));
        Job job =  processEngine().getManagementService().createJobQuery().singleResult();
        processEngine().getManagementService().executeJob(job.getId());

        assertThat(processInstance)
                .hasPassed("reminder_email_sent_consultant");

    }

    @Test
    public void givenCustomerSubmittedQuoteWhenMeetsCriteriaAndCustomerDidNotRespondInOneDayAndCustomerRejectedThenRemindCustEmailAndRejectMailSent() {

        Map<String, Object> submittedQuote = new HashMap<>();

        ProcessInstance processInstance = processEngine().getRuntimeService().startProcessInstanceByKey("policyprocess", submittedQuote);

        assertThat(processInstance)
                .isStarted()
                .hasPassed("submit_new_quote", "create_quote")
                .isWaitingAt("assess_quote")
                .task()
                .hasCandidateGroup("consultant");

        complete(task(), Variables.createVariables().putValue("approveQuote", Boolean.TRUE));

        assertThat(processInstance)
                .hasPassed("approved_quote_gateway", "approved_quote")
                .isWaitingAt("customer_accept_reject_quote")
                .task().hasCandidateGroup("customer");  long time = ClockUtil.getCurrentTime().getTime();

        long seconds = 10 * 24 * 60 * 60;
        ClockUtil.setCurrentTime(new Date(time+seconds*1000));
        Job job =  processEngine().getManagementService().createJobQuery().singleResult();
        processEngine().getManagementService().executeJob(job.getId());

        assertThat(processInstance)
                .hasPassed("remind_email_sent_customer");

        complete(task(), Variables.createVariables().putValue("customerAcceptQuote", Boolean.FALSE));

        assertThat(processInstance)
                .hasPassed("customer_accept_reject_quote_gateway", "customer_reject_email")
                .isEnded();

    }


}
