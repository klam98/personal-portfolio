import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    padding: 1rem 2rem;
    grid-template-areas: "div1 div2 div2 div3";
    position: sticky;
    top: 0;
    z-index: 30;
`;

export const Span = styled.div`
    font-size: 2rem;
`;

export const Div1 = styled.div`
    grid-area: div1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Div2 = styled.div`
    grid-area: div2;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
    }
`;
export const Div3 = styled.div`
    grid-area: div3;
    display: flex;
    justify-content: right;
`;

// Navigation Links
export const NavLink = styled.a`
    font-size: 1.8rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const SidebarButton = styled.button`
    padding: 0;
    border: 0;
    outline: 0;
    color: white;
    border-radius: 50px;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0);
    transition: 0.3s ease;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const SidebarContainer = styled.div`
    position: relative;
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
    margin-left: 8px;
    display: flex;
    align-self: center;
    transition: 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
    transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

    &:hover {
        opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 2px 0 0 2px;
        width: 15px;
    }
`;

// Social Icons
export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
`;
