import React from "react";

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
    <Section id="projects">
        <SectionDivider />
        <br />
        <SectionTitle>Projects</SectionTitle>
        <SectionText>My favorite applications that I have worked on and built.</SectionText>
        <GridContainer>
            {projects.map(({ id, image, title, description, tags, source, visit }) => (
                <BlogCard key={id}>
                    <Img src={image} alt="project" />
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                        <Hr />
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    <div>
                        <TitleContent>Stack:</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={source} target="_blank">
                            View Source Code
                        </ExternalLinks>
                        {visit ? (
                            <ExternalLinks href={visit} target="_blank">
                                View Website
                            </ExternalLinks>
                        ) : null}
                    </UtilityList>
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default Projects;
