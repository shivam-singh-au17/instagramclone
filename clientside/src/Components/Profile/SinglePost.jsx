import { React, useEffect, useState } from "react";
import styled from "styled-components";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const SubContainer = styled.div`
    display: flex;
    max-width: 80%;
    background-color: #fff;
    z-index: 50;
    min-height: 80vh;
    max-height: 90vh;
    min-width: 60%;
    margin: auto;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    box-sizing: border-box;
`;

const PostMedia = styled.div`
    display: flex;
    flex: 1 0 0;
    justify-self: left;
    background-color: black;
    width: 90%;

    .postImg {
        width: 100%;
        height: auto;
        object-fit: cover;
        max-height: 90vh;
        align-self: center;
    }
`;

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    /* background-color: orange !important; */
    box-sizing: border-box;
    cursor: auto;
    position: relative;
    justify-content: space-between;
    /* height: 100%; */
    
    .justifyDiv {
        display: flex;
        justify-content: center;
    }
    
    .userName {
        display: flex;
        /* position: absolute; */
        align-self: flex-start;
        align-items: center;
        font-weight: 600;
        border-bottom: 1px solid #efefef;
        padding: 16px;
        z-index: 10;
        width: 100%;
        box-sizing: border-box;
        /* background-color: turquoise; */
    }

    .profileIcon {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-right: 16px;
    }

    .captionBox {
        position: relative;
        overflow-y: scroll;
        padding: 16px;
        max-height: 100%;
        display: flex;
        justify-self: flex-start !important;
    }

    .captionBox::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

const BlueTick = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

const PostCommentInput = styled.div`
    display: flex;
    flex-grow: 1;
    align-self: flex-end;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    /* background-color: tomato !important; */
    align-content: center;
    border-top: 1px solid #efefef;

    textarea {
        display: flex;
        flex-grow: 1;
        -webkit-box-flex: 1;
        outline: none;
        border: none;
        resize: none;
        background-color: transparent;
        padding: 10px;
        box-sizing: border-box;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        color: #0095f6;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;

    }
`;

const inputStyle = {
    boxSizing: "border-box",
    width: "100%",
    border: "none",
    outline: "none",
    padding: "20px"
}

const InfoTopPart = styled.div`
    /* background-color: wheat; */
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

const CommentForm = styled.form`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    /* background-color: turquoise; */
    padding: 10px;
    box-sizing: border-box;
    border-top: 1px solid #efefef;

    svg{
        cursor: pointer;
        transform: rotate(0deg);
    }

    input{
        display:block;
        width:100%;
        font-size:14px;
        padding:10px 10px 10px 14px;
        border:none;
        outline:none;
    }

  button{
    background-color: transparent;
    border: none;
    outline: none;
    color: #0095f6;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    cursor: pointer;
  }
`

const SinglePost = ({id, item, likes, caption, comments_count, user, is_verified, profileImg}) => {
    // console.log("props", id, item, likes, comments_count);
    const [query, setQuery] = useState("");

    return (
        <>
            <SubContainer>
                <PostMedia>
                    <img className="postImg" src={item} alt={id} />
                </PostMedia>
                <PostInfo>
                    <InfoTopPart>
                    <div className="userName">
                        <img className="profileIcon" src={profileImg} alt={user} />
                        <div className="justifyDiv">
                            {user}
                            {
                                is_verified
                                    ? <BlueTick target="_blank" src="https://cdn.shopify.com/s/files/1/0439/6380/9955/products/main-qimg-261992ac747ff07b3d26c68ee1ee664e.png?v=1597432715" />
                                    : null
                            }
                        </div>
                    </div>
                    <div className="captionBox">
                        {caption
                            ? <div>{caption}{caption}</div>
                            : null
                        }
                    </div>
                    </InfoTopPart>
                    {/* <PostCommentInput>
                        <textarea aria-label="Add a comment…" placeholder="Add a comment…" autocomplete="off" autocorrect="off" data-emojiable="true"></textarea>
                    <button>POST</button>
                    </PostCommentInput> */}
                    <CommentForm>

        <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>

        <input type="text" placeholder="Add a comment..." value={query} onChange={(e) => setQuery(e.target.value)} />

        <button>Post</button>
      </CommentForm>
                </PostInfo>
            </SubContainer>
        </>
    );
}

export { SinglePost };