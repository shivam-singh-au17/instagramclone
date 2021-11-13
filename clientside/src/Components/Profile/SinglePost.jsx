import { React, useState } from "react";
import styled from "styled-components";
import { EngagementButtons } from "./ProfilePageUI";

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

// const PostCommentInput = styled.div`
//     display: flex;
//     flex-grow: 1;
//     align-self: flex-end;
//     height: 50px;
//     width: 100%;
//     box-sizing: border-box;
//     /* background-color: tomato !important; */
//     align-content: center;
//     border-top: 1px solid #efefef;

//     textarea {
//         display: flex;
//         flex-grow: 1;
//         -webkit-box-flex: 1;
//         outline: none;
//         border: none;
//         resize: none;
//         background-color: transparent;
//         padding: 10px;
//         box-sizing: border-box;
//     }

//     button {
//         background-color: transparent;
//         border: none;
//         outline: none;
//         color: #0095f6;
//         font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
//         font-size: 14px;
//         line-height: 18px;
//         font-weight: 600;

//     }
// `;

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
        transform: rotate(0deg) !important;
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
`;

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
                                ? <div>
                             {/* <img className="profileIcon" src={profileImg} alt={user} />
                             <div className="justifyDiv">
                                 {user}
                                 {
                                     is_verified
                                         ? <BlueTick target="_blank" src="https://cdn.shopify.com/s/files/1/0439/6380/9955/products/main-qimg-261992ac747ff07b3d26c68ee1ee664e.png?v=1597432715" />
                                         : null
                                 }
                             </div>  */}
                            {caption}
                        </div> 
                                : null
                            }
                        </div>
                    </InfoTopPart>
                    <EngagementButtons>
                        <div className="engagementLeftSection">
                        <div className="likesBtn">
                            <span class=""><svg aria-label="Like" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></span>
                        </div>
                        <div className="commentBtn">
                            <svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        </div>
                        <div className="shareBtn">
                            <svg aria-label="Share Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        </div>
                        <div className="engagementRightSection">
                            <div className="saveBtn">
                            <svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                        </div>
                    </EngagementButtons>
                    <CommentForm>

                        <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>

                        <input type="text" placeholder="Add a comment..." autoComplete="off" autoCorrect="off" value={query} onChange={(e) => setQuery(e.target.value)} />

                        <button>Post</button>
                    </CommentForm>
                </PostInfo>
            </SubContainer>
        </>
    );
}

export { SinglePost };