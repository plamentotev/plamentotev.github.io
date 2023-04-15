import org.springframework.boot.gradle.plugin.SpringBootPlugin

plugins {
    java

    id("org.springframework.boot") version "3.0.0"
}

repositories {
    mavenCentral()
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

dependencies {
    implementation(platform(SpringBootPlugin.BOM_COORDINATES))

    implementation("org.springframework.boot:spring-boot-starter-web")

    /* %start_snippet% */
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    /* %end_snippet% */

    testImplementation("org.springframework.boot:spring-boot-starter-test")

    testImplementation("org.springframework.restdocs:spring-restdocs-mockmvc")
}

tasks.test {
    useJUnitPlatform()
}
