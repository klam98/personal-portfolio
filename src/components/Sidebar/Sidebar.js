import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";

import { SidebarContainer, Icon, SidebarMenu, SidebarLink } from "./SidebarStyles";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <FaTimes />
            </Icon>
            <SidebarMenu>
                <Link passHref href="#home">
                    <SidebarLink>Home</SidebarLink>
                </Link>
                <Link passHref href="#education">
                    <SidebarLink>Education</SidebarLink>
                </Link>
                <Link passHref href="#employment">
                    <SidebarLink>Employment</SidebarLink>
                </Link>
                <Link passHref href="#tech">
                    <SidebarLink>Technologies</SidebarLink>
                </Link>
                <Link passHref href="#projects">
                    <SidebarLink>Projects</SidebarLink>
                </Link>
                <Link passHref href="#about">
                    <SidebarLink>About/Contact</SidebarLink>
                </Link>
            </SidebarMenu>
        </SidebarContainer>
    );
};

export default Sidebar;
