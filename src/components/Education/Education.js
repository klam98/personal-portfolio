import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { EducationContainer, EducationText, Img } from "../Education/EducationStyles";
const graduated = "/images/6.jpg";

function Education() {
    return (
        <Section id="education">
            <SectionDivider />
            <br />
            <SectionTitle>Education</SectionTitle>
            <EducationContainer>
                <EducationText>
                    I graduated with a Bachelor's degree in Computer Science from Simon Fraser
                    Univeristy (SFU) on August 2021. As a second-generation Asian-Canadian, I am
                    very grateful that I had the opportunity to receive formal education, allowing
                    me to discover my passion for Software Development. I have made many life-long
                    friends and memories throughout my undergraduate degree and hope to work
                    alongside some of my peers in the future.
                </EducationText>
                <Img src={graduated} />
            </EducationContainer>
        </Section>
    );
}

export default Education;
