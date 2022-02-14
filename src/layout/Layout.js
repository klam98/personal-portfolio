import React from "react";

import { Container } from "./LayoutStyles";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};
