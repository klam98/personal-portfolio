import styled from "styled-components";

export const HeroSection = styled.section`
    display: ${(props) => (props.grid ? "grid" : "flex")};
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    padding: ${(props) => (props.nopadding ? "0" : "48px 48px 0")};
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 12px 48px 0;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 12px 0 0;
        width: calc(100vw - 32px);
        flex-direction: column;
    }
`;

export const LeftSection = styled.div`
    width: 100%;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        display: flex;
        flex-direction: column;

        margin: 0 auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 80%;
        display: flex;
        flex-direction: column;

        margin: 0 auto;
    }
`;

export const Img = styled.img`
    width: 40%;
    object-fit: cover;
    overflow: hidden;
    padding-bottom: 1.5rem;
`;

export const HeroTitle = styled.h1`
    font-weight: 600;
    font-size: ${(props) => (props.main ? "65px" : "56px")};
    line-height: ${(props) => (props.main ? "72px" : "56px")};
    color: #7aa9f9;
    width: max-content;
    max-width: 100%;
    background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    margin-top: 0;
    margin-bottom: 16px;
    padding: ${(props) => (props.main ? "32px 0 16px" : "0")};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${(props) => (props.main ? "56px" : "48px")};
        line-height: ${(props) => (props.main ? "56px" : "48px")};
        margin-bottom: 12px;
        padding: ${(props) => (props.main ? "16px 0 12px" : "0")};
        align-self: center;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: ${(props) => (props.main ? "28px" : "32px")};
        line-height: ${(props) => (props.main ? "32px" : "40px")};
        margin-bottom: 8px;
        padding: ${(props) => (props.main ? "8px 0 8px" : "0")};
        max-width: 100%;
    }
`;

export const HeroText = styled.p`
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding: 0.5rem 0 3rem;
    color: #eeeeee;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 22px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 24px;
    }
`;
