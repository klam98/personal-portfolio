import React, { useState } from "react";

import { Container } from "./LayoutStyles";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};
