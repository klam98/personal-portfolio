import Link from "next/link";
import React, { useEffect } from "react";
import {
    FaTimes,
    FaHome,
    FaGraduationCap,
    FaBriefcase,
    FaLaptop,
    FaPencilAlt,
    FaUser,
} from "react-icons/fa";

import {
    SidebarContainer,
    Icon,
    SidebarMenu,
    SidebarLink,
    Span,
    LinkIcon,
    DarkOverlay,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    // disable scroll when the sidebar is active for more intuitive UX
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggleSidebar}>
                    <FaTimes />
                </Icon>
                <SidebarMenu>
                    <Span>Kenrick</Span>
                    <Link passHref href="#home">
                        <SidebarLink onClick={toggleSidebar}>
                            Home
                            <LinkIcon>
                                <FaHome />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                    <Link passHref href="#education">
                        <SidebarLink onClick={toggleSidebar}>
                            Education
                            <LinkIcon>
                                <FaGraduationCap />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                    <Link passHref href="#employment">
                        <SidebarLink onClick={toggleSidebar}>
                            Employment
                            <LinkIcon>
                                <FaBriefcase />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                    <Link passHref href="#tech">
                        <SidebarLink onClick={toggleSidebar}>
                            Technologies
                            <LinkIcon>
                                <FaLaptop />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                    <Link passHref href="#projects">
                        <SidebarLink onClick={toggleSidebar}>
                            Projects
                            <LinkIcon>
                                <FaPencilAlt />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                    <Link passHref href="#about">
                        <SidebarLink onClick={toggleSidebar}>
                            About/Contact
                            <LinkIcon>
                                <FaUser />
                            </LinkIcon>
                        </SidebarLink>
                    </Link>
                </SidebarMenu>
            </SidebarContainer>

            <DarkOverlay isOpen={isOpen} onClick={toggleSidebar} />
        </>
    );
};

export default Sidebar;
