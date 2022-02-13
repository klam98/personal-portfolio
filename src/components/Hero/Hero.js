import React from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroTitle, Img } from "./HeroStyles";
const memoji = "/images/5.png";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <HeroTitle main center id="welcome">
                Welcome to my <br /> Personal Portfolio
            </HeroTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Img src={memoji} />
            </div>
            <SectionText>
                Hello, my name is Kenrick and I am an aspiring Software Developer from Vancouver BC,
                Canada. I am very eager to grow in both my professional and personal life by
                improving my skillset and meeting new people.
            </SectionText>
            {/* <Button onClick={() => window.open("https://www.linkedin.com/in/klam98", "_blank")}>
                Learn More
            </Button> */}
        </LeftSection>
    </Section>
);

export default Hero;
