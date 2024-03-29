import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    padding: 3rem;
    place-items: center;
    column-gap: 3rem;
    row-gap: 3rem;
    margin-bottom: 5rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem 0.5rem 4rem 0.5rem;
    }
`;
export const BlogCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    text-align: center;
    width: 450px;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`;
export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
    color: #d8bfbf;
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    color: #9cc9e3;
    padding: 0.5rem 0;
    font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d8bfbf;
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: "Droid Serif", serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0px 30px 25px;
    color: #cccccc;
    font-size: 1.75rem;
    line-height: 24px;
    text-align: left;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 1rem 2rem 2rem 2rem;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
    color: #eee;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    background: #5c84d6;
    border-radius: 15px;
    transition: 0.5s;
    &:hover {
        background: #1f61dd;
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
`;

export const Tag = styled.li`
    color: #d8bfbf;
    font-size: 1.5rem;
`;
