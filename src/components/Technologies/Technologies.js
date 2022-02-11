import React from "react";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import { DiFirebase, DiReact } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            Here are some of the techonlogies I have worked with either professionally or through
            school-related projects.
        </SectionText>
        <List>
            <ListItem>
                <AiOutlineCode size="4rem" />
                <ListTitle>Languages</ListTitle>
                <ListParagraph>Python, SQL, Java, JavaScript, HTML5, CSS3, C++</ListParagraph>
            </ListItem>
            <ListItem>
                <DiReact size="4rem" />
                <ListTitle>Frameworks</ListTitle>
                <ListParagraph>
                    React, Node.js, Express, Spring Boot, MongoDB, PostgreSQL, Mocha.js
                </ListParagraph>
            </ListItem>
            <ListItem>
                <AiOutlineTool size="4rem" />
                <ListTitle>Tools</ListTitle>
                <ListParagraph>Git, Azure DevOps, Jira, Trello</ListParagraph>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
