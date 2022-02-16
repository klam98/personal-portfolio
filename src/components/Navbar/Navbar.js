import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    SidebarContainer,
    SidebarButton,
    Span,
} from "./NavbarStyles";

const Navbar = ({ toggleSidebar }) => {
    const [changeNavColor, setChangeNavColor] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 5) {
            setChangeNavColor(true);
        } else {
            setChangeNavColor(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeNavbarColor);
    }

    return (
        <Container style={{ backgroundColor: changeNavColor ? "#202633" : "#0F1624" }}>
            <Div1>
                <SidebarContainer>
                    <SidebarButton onClick={toggleSidebar}>
                        <FaBars size="3rem" />
                    </SidebarButton>
                </SidebarContainer>

                <Span
                    style={{
                        display: "flex",
                        color: "white",
                        marginLeft: "1.5rem",
                    }}
                >
                    <Link href="/" passHref>
                        <NavLink>Kenrick Lam</NavLink>
                    </Link>
                </Span>
            </Div1>
            <Div2>
                <li>
                    <Link href="#home" passHref>
                        <NavLink>Home</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#education" passHref>
                        <NavLink>Education</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#employment" passHref>
                        <NavLink>Employment</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#tech" passHref>
                        <NavLink>Skills</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#projects" passHref>
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#about" passHref>
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
};

export default Navbar;
