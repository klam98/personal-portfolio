import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to my <br /> Personal Portfolio
            </SectionTitle>
            <SectionText>
                I am an aspiring Software Developer from Vancouver BC, Canada.
            </SectionText>
            {/* <Button onClick={() => window.open("https://www.linkedin.com/in/klam98", "_blank")}>
                Learn More
            </Button> */}
        </LeftSection>
    </Section>
);

export default Hero;
