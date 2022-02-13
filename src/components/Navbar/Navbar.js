import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from "./NavbarStyles";

const Navbar = () => (
    <Container>
        <Div1>
            <Link passHref href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "15px",
                    }}
                >
                    <DiCssdeck size="3rem" /> <Span>Kenrick Lam</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link passHref href="#education">
                    <NavLink>Education</NavLink>
                </Link>
            </li>
            <li>
                <Link passHref href="#employment">
                    <NavLink>Employment</NavLink>
                </Link>
            </li>
            <li>
                <Link passHref href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link passHref href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link passHref href="#about">
                    <NavLink>About/Contact</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/klam98" target="_blank">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/klam98" target="_blank">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Navbar;
