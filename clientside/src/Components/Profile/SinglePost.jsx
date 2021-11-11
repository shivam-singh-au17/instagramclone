import { React } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    max-width: 80%;
    background-color: yellow;
    z-index: 200;
    position: fixed;
    /* overflow: scroll; */
    min-height: 80vh;
    min-width: 60%;
    margin: auto;
    /* padding: 20px; */
    align-self: center;
    justify-self: center;
`;

const PostMedia = styled.div`
    display: flex;
    flex: 1 0 0;
    justify-self: left;
    background-color: black;
    width: 90%;

    .postItem {
        width: 100%;
        height: auto;
        max-height: 90vh;
        align-self: center;
    }
`;

const PostInfo = styled.div`
    display: flex;
    justify-self: right;
    width: 500px;
    background-color: whitesmoke !important;
`;

const SinglePost = ({id, item, likes, comments_count}) => {
    console.log("props", id, item, likes, comments_count);

    return (
        <>
            <Container>
                <PostMedia>
                    <img className="postItem" src={item} alt={id} />
                </PostMedia>
                <PostInfo>
                    j
                </PostInfo>
            </Container>
        </>
    );
}

export { SinglePost };