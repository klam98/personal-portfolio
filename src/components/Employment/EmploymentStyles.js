import styled from "styled-components";

export const RowContainer = styled.div`
    display: grid;
    grid-template-areas: "img info";
    padding: 3rem 0rem;
    column-gap: 3rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        display: block;
        padding: 3rem 0rem 0rem 0rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
    }
`;

export const Img = styled.img`
    display: flex;
    grid: img;
    width: 250px;
    height: 250px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 7px;

    @media ${(props) => props.theme.breakpoints.lg} {
        margin-bottom: 2rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        align-self: center;
    }
`;

export const RowInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid: info;
    width: 100%;
    color: #cccccc;
    font-size: 1.75rem;
    line-height: 24px;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 1rem 1rem;
    }
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    color: #9cc9e3;
    padding: 0.5rem 0;
    font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const ItalicsInfo = styled.p`
    font-style: italic;
    font-size: 1.75rem;
    line-height: 24px;
`;

export const JobInfo = styled.p`
    width: 100%;
    padding: 20px 0px;
    color: #cccccc;
    font-size: 1.75rem;
    line-height: 24px;
    text-align: left;
`;
