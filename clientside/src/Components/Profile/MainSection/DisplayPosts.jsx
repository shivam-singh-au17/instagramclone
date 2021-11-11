import { React, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 32%);
    gap: 1.33%;
    /* background-color: yellow; */
    justify-content: space-between;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const HoveredDiv = styled.div`
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    position: absolute;
    cursor: pointer;
    top: 0;
    height: 100%;

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

const PostItem = styled.div`
    position: relative;
    
    &:hover{
        cursor: pointer;
    }
`;

const changeNumberFormat = (num) => {
    num = Math.abs(Number(num));
    return (
        num >= 1.0e+9
            ? (num / 1.0e+9).toFixed(1) + "b"
            : num >= 1.0e+6
            ? (num / 1.0e+6).toFixed(1) + "m"
            : num >= 1.0e+3
            ? (num / 1.0e+3).toFixed(1) + "k"
            : num
    )
}

const DispayPosts = ({ posts }) => {
    const [showLikes, setShowLikes] = useState(-1);

    const handleHover = (i) => {
        setShowLikes(i);
        console.log(i);
    }

    console.log(posts);
    return (
        <>
            <Container>
                {posts && posts.map((el, index) =>
                    <PostItem onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(-1)}>
                        <img src={el.item} alt={index} key={index} />
                        
                        {showLikes === index
                            ? <HoveredDiv>
                                <div className="likesBox">
                                    {changeNumberFormat(el.likes)}
                                    <FavoriteIcon />
                                </div>
                                <div className="commentsBox">
                                    {changeNumberFormat(el.comments)}
                                    <ModeCommentIcon />
                                </div>
                            </HoveredDiv>
                            : null
                        }
                    </PostItem>
                )}
            </Container>
        </>
    );
}

export { DispayPosts };