FROM openjdk:14-jdk-alpine3.10
RUN mkdir camunda && mkdir staging
RUN wget https://camunda.org/release/camunda-bpm/wildfly/7.10/camunda-bpm-wildfly-7.10.0.tar.gz
RUN tar xvzf camunda-bpm-wildfly-7.10.0.tar.gz -C staging
RUN cp staging/server/wildfly-14.0.1.Final/* camunda -r

RUN rm staging/ -r

# remove default example
# RUN rm -rf /camunda/standalone/deployments/camunda-example-invoice-*.war
#ADD ~/.camunda/ /root/


# add showcase
ADD target/insurance-bpm-1.0-SNAPSHOT.jar /camunda/standalone/deployments/

# increase default session timeout to 8h and deployment timeout to 15min

#RUN /camunda/bin/jboss-cli.sh --commands="embed-server, \
#	/subsystem=undertow/servlet-container=default:write-attribute(name=default-session-timeout, value=480), \
#	/system-property=jboss.as.management.blocking.timeout:add(value=900), \
#	/subsystem=deployment-scanner/scanner=default:write-attribute(name=deployment-timeout,value=900)"

EXPOSE 8787

CMD ["/camunda/bin/standalone.sh"]
