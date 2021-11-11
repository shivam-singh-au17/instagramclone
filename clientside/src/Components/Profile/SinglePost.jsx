import { React } from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 80%;
    background-color: yellow;
    z-index: 200;
    position: absolute;
    min-height: 80vh;
    min-width: 60%;
    margin: auto;
    align-self: center;
    justify-self: center;
`;

const PostMedia = styled.div`
    display: flex;
`;

const PostInfo = styled.div``;

const SinglePost = () => {
    return (
        <>
            <Container>
                <PostMedia>
dfidsfjkdn
                </PostMedia>
                <PostInfo>

                </PostInfo>
            </Container>
        </>
    );
}

export { SinglePost };