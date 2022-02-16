import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SectionDivider, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Navbar/NavbarStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <SectionDivider />
            <br />
            <SectionTitle>Contact</SectionTitle>
            <SectionText>Send me an email if you would like to chat. :)</SectionText>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    {/* <LinkItem href="tel:778-869-3752">(778) 869-3752</LinkItem> */}
                    <LinkItem>(778) 869-3752</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:kenricklam98@gmail.com">kenricklam98@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>
                        © Copyright 2022 Kenrick Lam
                        <br /> Built with React and Next.js.
                    </Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/klam98" target="_blank">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/klam98" target="_blank">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
