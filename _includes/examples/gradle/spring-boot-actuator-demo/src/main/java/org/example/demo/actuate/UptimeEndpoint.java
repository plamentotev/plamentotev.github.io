package org.example.demo.actuate;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

import java.lang.management.ManagementFactory;

@Component
@Endpoint(id = "uptime") // (1)
public class UptimeEndpoint {

    @ReadOperation // (2)
    public Uptime getUptime() {
        var runtime = ManagementFactory.getRuntimeMXBean();

        return new Uptime(runtime.getUptime(), runtime.getStartTime());
    }

    private record Uptime(long uptime, long startTime) { }

}
