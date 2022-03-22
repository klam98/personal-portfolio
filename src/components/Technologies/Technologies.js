import React from "react";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import { DiFirebase, DiReact } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Skills</SectionTitle>
        <SectionText>
            Languages, frameworks, and tools that I have worked with either professionally or
            through school-related assignments and projects.
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <AiOutlineCode size="4rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Languages</ListTitle>
                    <ListParagraph>Python, SQL, Java, JavaScript, C++</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiReact size="4rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Frameworks</ListTitle>
                    <ListParagraph>
                        React, Node.js, Express, Redux, MongoDB, PostgreSQL, Spring Boot
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <AiOutlineTool size="4rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Tools</ListTitle>
                    <ListParagraph>
                        Git, Azure DevOps, Jira, Joomla, cPanel, Microsoft SSMS/SSRS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
