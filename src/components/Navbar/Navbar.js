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
    DropdownButton,
    DropdownContainer,
    DropdownItems,
    Span,
} from "./NavbarStyles";

const Navbar = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const [changeNavColor, setChangeNavColor] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 5) {
            setChangeNavColor(true);
        } else {
            setChangeNavColor(false);
        }
    };

    const handleDropDown = () => {
        setIsDropDown(!isDropDown);
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeNavbarColor);
    }

    return (
        <Container style={{ backgroundColor: changeNavColor ? "#202633" : "#0F1624" }}>
            <Div1>
                <DropdownContainer>
                    <DropdownButton onClick={handleDropDown}>
                        <FaBars size="3rem" />
                    </DropdownButton>
                </DropdownContainer>

                <Span
                    style={{
                        display: "flex",
                        color: "white",
                        marginLeft: "2rem",
                    }}
                >
                    Kenrick Lam
                </Span>
            </Div1>
            <Div2>
                <li>
                    <Link passHref href="#home">
                        <NavLink>Home</NavLink>
                    </Link>
                </li>
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
};

export default Navbar;
