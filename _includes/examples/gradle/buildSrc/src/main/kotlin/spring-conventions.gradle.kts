import org.springframework.boot.gradle.plugin.SpringBootPlugin

plugins {
    id("java-conventions")

    id("org.springframework.boot")
}

dependencies {
    implementation(platform(SpringBootPlugin.BOM_COORDINATES))
}
