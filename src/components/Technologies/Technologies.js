import React from "react";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIcon } from "./TechnologiesStyles";

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
                <ListIcon>
                    <AiOutlineCode size="4rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>Languages</ListTitle>
                    <ListParagraph>TypeScript / JavaScript, Python, SQL, Java, C / C++, HTML5, CSS3</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListIcon>
                    <DiReact size="4rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>Frameworks</ListTitle>
                    <ListParagraph>
                        React, React Native, Node.js, Express.js, PostgreSQL, Expo, Jest, Mocha, Chai, Sinon
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListIcon>
                    <AiOutlineTool size="4rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>Tools</ListTitle>
                    <ListParagraph>
                        Git, Jira, Docker, Kubernetes, CircleCI, ArgoCD, Google Cloud Logging, Prometheus, Postman
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
