plugins {
    `spring-conventions`
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")

    /* %start_snippet% */
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    /* %end_snippet% */

    testImplementation("org.springframework.boot:spring-boot-starter-test")

    testImplementation("org.springframework.restdocs:spring-restdocs-mockmvc")
}
