import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
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
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:778-869-3752">(778) 869-3752</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:kenricklam98@gmail.com">kenricklam98@gmail.com</LinkItem>
                </LinkColumn>
                <SocialIconsContainer>
                    <SocialContainer>
                        <SocialIcons href="https://github.com/klam98" target="_blank">
                            <AiFillGithub size="3rem" />
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/klam98" target="_blank">
                            <AiFillLinkedin size="3rem" />
                        </SocialIcons>
                    </SocialContainer>
                </SocialIconsContainer>
            </LinkList>
        </FooterWrapper>
    );
};

export default Footer;
