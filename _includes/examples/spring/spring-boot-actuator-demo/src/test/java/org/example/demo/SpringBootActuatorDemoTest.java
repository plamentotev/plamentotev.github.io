package org.example.demo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.mockmvc.MockMvcSnippetConfigurer;
import org.springframework.restdocs.templates.TemplateFormats;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ExtendWith(RestDocumentationExtension.class)
public class SpringBootActuatorDemoTest {

	private MockMvc mockMvc;

	@BeforeEach
	public void setUp(WebApplicationContext webApplicationContext, RestDocumentationContextProvider restDocumentation) {
		MockMvcSnippetConfigurer configurer = documentationConfiguration(restDocumentation)
			.snippets().withTemplateFormat(TemplateFormats.markdown());
		this.mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext)
			.apply(configurer)
			.build();
	}

	@Test
	void getCurrentTimeEndpoint() throws Exception {
		this.mockMvc.perform(get("/actuator/uptime"))
			.andExpect(status().isOk())
			.andDo(document("uptime"));
	}

}
