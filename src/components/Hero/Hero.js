import React from "react";

import { Section } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroTitle, HeroText, Img } from "./HeroStyles";
const memoji = "images/5.png";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <HeroTitle main center id="welcome">
                Welcome to my <br /> Personal Portfolio
            </HeroTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Img src={memoji} />
            </div>
            <HeroText>
                Hello, my name is Kenrick and I am an aspiring Software Developer from Vancouver BC,
                Canada. I am very eager to grow in both my professional and personal life by
                improving my skillset and meeting new people.
            </HeroText>
            <form
                method="get"
                target="_blank"
                title="Kenrick-Lam-Resume-Feb2022.pdf"
                action="Kenrick-Lam-Resume-Feb2022.pdf"
            >
                <Button type="submit">View My Resume</Button>
            </form>
        </LeftSection>
    </Section>
);

export default Hero;
