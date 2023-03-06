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
                Greetings and welcome to my website. My name is Kenrick and I am a Software
                Developer from Vancouver BC, Canada. I am very eager to grow in both my professional
                and personal life by improving my skillset and meeting new people.
            </HeroText>
            <form
                method="get"
                target="_blank"
                title="Kenrick Lam Resume - Jan 2023"
                action="Kenrick-Lam-Resume-Jan2023.pdf"
            >
                <Button type="submit">View My Resume</Button>
            </form>
        </LeftSection>
    </HeroSection>
);

export default Hero;
