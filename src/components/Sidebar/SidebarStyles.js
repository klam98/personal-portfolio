import styled from "styled-components";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 35;
    width: 250px;
    height: 100%;
    background: #202633;
    display: grid;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
    /* left: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    padding-top: 5rem;
`;

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    transition: 0.2s ease-in-out;
    color: rgba(255, 255, 255, 0.75);

    &:hover {
        background-color: #276aad;
        cursor: pointer;
    }
`;
