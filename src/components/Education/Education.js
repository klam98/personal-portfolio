import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { EducationContainer, EducationText, Img } from "../Education/EducationStyles";
const graduated = "images/kenrick-sfu-grad.jpg";

function Education() {
    return (
        <Section id="education">
            <SectionDivider />
            <br />
            <SectionTitle>Education</SectionTitle>
            <EducationContainer>
                <EducationText>
                    I graduated with a Bachelor's degree in Computer Science from Simon Fraser
                    University in 2021. As a second-generation Asian-Canadian, I am very grateful
                    that I had the opportunity to receive formal education, since it allowed me to
                    discover my passion for software development. Throughout my time during university,
                    I made wonderful memories and gained many life-long friends that I hope to work
                    alongside with in the future.
                </EducationText>
                <Img src={graduated} alt="graduation day" />
            </EducationContainer>
        </Section>
    );
}

export default Education;
