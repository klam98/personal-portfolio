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
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
    padding-right: 25px;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
        padding-right: 0px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
        padding-right: 0px;
    }
`;
