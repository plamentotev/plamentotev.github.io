---
demo_path: examples/gradle/spring-boot-actuator-demo
snippet_path: examples/gradle/spring-boot-actuator-demo/build/generated-snippets/uptime
spring-reference-url: https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle
---
# Implementing Custom Actuator Endpoint

Spring Boot provides [actuator endpoints]({{page.spring-reference-url}}/#actuator) that allows you to monitor or manage your application over JMX or HTTP. To add custom endpoint annotate Spring bean with `@Endpoint`.<!--more-->

{% highlight java %}
{% include {{ page.demo_path }}/src/main/java/org/example/demo/actuate/UptimeEndpoint.java %}
{% endhighlight %}

1. `@Endpoint` marks the class as Actuator endpoint. For HTTP endpoints `id` specifies the path - `actuator/uptime` in this example.
2. `@ReadOperation` marks the method as read operation. You can also use `@WriteOperation` and `@DeleteOperation` for respectively write and delete operations.

Accessing the endpoint:

{% include {{page.snippet_path}}/curl-request.md %}

would return the uptime in JSON format:

{% include {{page.snippet_path}}/response-body.md %}

For more information check the [reference guide]({{page.spring-reference-url}}/#actuator.endpoints.implementing-custom).

## Troubleshooting

### The code does not compile

Make sure that you have included the `starter-actuator` dependency:

{% highlight groovy %}
{% include_snippet {{page.demo_path}}/build.gradle.kts %}
{% endhighlight %}

### /actuator/uptime returns 404 (Not Found)

Due to [security considerations]({{page.spring-reference-url}}/#actuator.endpoints.security), most endpoint by default are disabled over HTTP. You can enable all endpoints (after you read the docs) by setting `management.endpoints.web.exposure.include`:

{% highlight properties %}
{% include {{page.demo_path}}/src/main/resources/application.properties %}
{% endhighlight %}
