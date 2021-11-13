import { React, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { HoveredPost, PostItem } from "./ProfilePageUI";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    /* background-color: yellow; */
    
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
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

const DispayPosts = ({ posts, handlePostClick }) => {
    const [showLikes, setShowLikes] = useState(-1);

    const handleHover = (i) => {
        setShowLikes(i);
    }

    // console.log(posts);
    return (
        <>
            <Container>
                {posts && posts.map((el, index) =>
                    <PostItem
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(-1)}
                        onClick={() => handlePostClick(index)}
                    >
                        <img src={el.item} alt={index} key={index} />
                        
                        {showLikes === index
                            ? <HoveredPost>
                                <div className="likesBox">
                                    {changeNumberFormat(el.likes)}
                                    <FavoriteIcon />
                                </div>
                                <div className="commentsBox">
                                    {changeNumberFormat(el.comments_count)}
                                    <ModeCommentIcon />
                                </div>
                            </HoveredPost>
                            : null
                        }
                    </PostItem>
                )}
            </Container>
        </>
    );
}

export { DispayPosts };