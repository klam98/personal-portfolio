import React from "react";

import Button from "../../styles/GlobalComponents/Button";
import { HeroSection, LeftSection, HeroTitle, HeroText, Img } from "./HeroStyles";
const memoji = "images/kenrick-memoji.png";

const Hero = () => (
    <HeroSection row nopadding>
        <LeftSection>
            <HeroTitle main center id="welcome">
                Kenrick Lam <br /> Personal Portfolio
            </HeroTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Img src={memoji} alt="apple emoji" />
            </div>
            <HeroText>
                Welcome to my website. My name is Kenrick and I am a Software Developer from Vancouver BC, Canada.
                I love learning new technologies and frameworks to help build applications I am passionate about!
            </HeroText>
            <form
                method="get"
                target="_blank"
                title="Kenrick Lam Resume - Aug 2023"
                action="Kenrick-Lam-Resume-Aug2023.pdf"
            >
                <Button type="submit">View My Resume</Button>
            </form>
        </LeftSection>
    </HeroSection>
);

export default Hero;
