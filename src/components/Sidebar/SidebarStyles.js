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
    transition: all 0.2s ease;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    /* opacity: 0;
    left: -100%; */
`;

export const DarkOverlay = styled.aside`
    position: fixed;
    z-index: 35;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    top: 0;
    left: 0;
    transition: all 0.2s ease;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    left: ${({ isOpen }) => (isOpen ? "250px" : "-100%")};
`;

export const SidebarContainerActive = styled.aside`
    opacity: 100%;
    left: 0;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 3rem;
    transition: 0.3s ease;
    color: white;

    &:hover {
        transform: scale(1.25);
        cursor: pointer;
    }
`;

export const LinkIcon = styled.div`
    color: white;
    font-size: 2.5rem;
    padding-left: 1.5rem;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 60px);
`;

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    transition: all 0.2s ease-in-out;
    color: rgba(255, 255, 255, 0.75);

    &:hover {
        background-color: #276aad;
        cursor: pointer;
    }
`;

export const Span = styled.div`
    font-size: 2.25rem;
    /* font-weight: bold; */
    align-self: center;
    justify-self: center;
`;
