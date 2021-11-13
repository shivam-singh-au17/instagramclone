import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplaySinglePost = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 30;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    svg {
        transform: rotate(270deg);
    }
`;

export const LeftButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* font-size: 30px; */
    font-weight: bold;
    z-index: 300;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    cursor: pointer;

    svg {
        transform: rotate(270deg);
    }

    .hideBtn {
        display: none !important;
    }

    .showBtn {
        display: flex !important;
    }
`;

export const RightButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* font-size: 30px; */
    font-weight: bold;
    z-index: 300;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    cursor: pointer;

    svg {
        transform: rotate(90deg);
    }

    .hideBtn {
        display: none !important;
    }

    .showBtn {
        display: flex !important;
    }
`;

export const CancelButton = styled.div`
    top: 10px;
    right: 10px;
    padding: 10px;
    position: absolute;
    cursor: pointer;
`;

// DisplayPosts.jsx styled components

export const HoveredPost = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 18px;
    width: 100%;
    height: 99%;
    cursor: pointer;

    svg {
        font-size: 18px;
        margin-left: 5px;
    }
    
    .likesBox {
        font-size: 18px;
        margin-right: 25px;
        display: flex;
        align-items: center;
    }

    .commentsBox {
        display: flex;
        align-items: center;
    }
`;

export const PostItem = styled.div`
    position: relative;
    
    &:hover{
        cursor: pointer;
    }
`;

// Header.jsx components

export const BioPart = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .displayName {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: #00376b
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #8e8e8e;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #262626;
    }
`;

// SinglePost.jsx styled-components

export const EngagementButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-around;
    margin-bottom: 20px;
    padding-top: 10px;
    border-top: 1px solid #efefef;

    svg {
        transform: rotate(0deg) !important;
        margin: auto 10px;
        cursor: pointer;
    }

    .engagementLeftSection {
        display: flex;
    }
`;