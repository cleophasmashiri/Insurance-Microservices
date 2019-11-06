package com.demo.delegates;

import com.demo.model.Notification;
import com.demo.service.NotificationService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmailDelegate implements JavaDelegate {

    private static Logger LOGGER = LoggerFactory.getLogger(EmailDelegate.class);

    @Autowired
    private NotificationService notificationService;

    @Override
    public void execute(DelegateExecution execution) throws Exception {

        LOGGER.info("EmailDelegate ..");

//        Notification message = new Notification();
//
//        String mailtext = (String) execution.getVariable("consultantReminderEmailBody");
//        String subject = (String) execution.getVariable("consultantReminderEmailSubject");
//
//        message.setSubject(subject);
//        message.setToFrom("from@demo.com");
//        message.setToEmail("consultants@demo.com");
//        message.setBody(mailtext);
//        message.setAction(subject);
//        message.setActionDescription(subject);
//        execution.setVariable("Invoice-Email", message);
//
//        notificationService.sendMessage(message);
    }
}
