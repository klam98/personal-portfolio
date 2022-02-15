import styled from "styled-components";

export const Img = styled.img`
    width: 40%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 7px;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
    }
`;

export const EducationContainer = styled.div`
    display: flex;

    @media ${(props) => props.theme.breakpoints.md} {
        display: block;
    }
`;

export const EducationText = styled.p`
    max-width: 60%;
    padding-bottom: 3.6rem;
    padding-right: 25px;
    color: #cccccc;
    font-size: 1.75rem;
    line-height: 24px;
    text-align: left;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 100%;
        padding-bottom: 24px;
        padding-right: 0px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding-bottom: 16px;
    }
`;
