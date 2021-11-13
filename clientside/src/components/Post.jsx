import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Likes from "./Likes";
import PostOptions from "./PostOptions";
import axios from "axios";
import { format } from "timeago.js";

export default function Post({ post }) {
  console.log("post: ", post);
  const [showLikes, setShowLikes] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // redux current logged in user
  const currentUserId = "618ec41fcb60486757fe31d9";

  useEffect(() => {
    // current fetch user
    const fetchCurrentUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/id/${currentUserId}`
      );
      setCurrentUser(res.data);
      setIsSaved(res.data.savedPosts.includes(post._id));
    };
    fetchCurrentUser();
  }, []);

  // slider section
  let middleSection = useRef();
  let postSlides = useRef();
  let leftSlidePostBtn = useRef();
  let rightSlidePostBtn = useRef();
  let postPosition = 0;
  let currentSlide = 1;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUserId));
  }, [currentUserId, post.likes]);

  useEffect(() => {
    // post ka jo user hain
    // uske user ko fetch kar rahe hain
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/id/${post.userId}`
      );
      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    let totalSlides = postSlides.current.childElementCount;

    if (currentSlide === 1) {
      leftSlidePostBtn.current.style.display = "none";
    }

    if (currentSlide === totalSlides) {
      rightSlidePostBtn.current.style.display = "none";
    }
  }, [currentSlide]);

  function postSlideLeft() {
    let middleSectionW = middleSection.current.clientWidth;

    currentSlide = currentSlide - 1;

    if (currentSlide === 1) {
      leftSlidePostBtn.current.style.display = "none";
    }
    postPosition = postPosition + middleSectionW;
    postSlides.current.style.transform = `translateX(${postPosition}px)`;
    rightSlidePostBtn.current.style.display = "block";
  }

  function postSlideRight() {
    let middleSectionW = middleSection.current.clientWidth;
    let totalSlides = postSlides.current.childElementCount;

    currentSlide = currentSlide + 1;

    if (currentSlide === totalSlides) {
      rightSlidePostBtn.current.style.display = "none";
    }
    postPosition = postPosition - middleSectionW;
    postSlides.current.style.transform = `translateX(${postPosition}px)`;
    leftSlidePostBtn.current.style.display = "block";
  }

  function handleLikes() {
    if (showLikes) {
      setShowLikes(false);
    } else {
      setShowLikes(true);
    }
  }

  function handleOptions() {
    if (showOptions) {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  }

  // liked section
  function handleLiked() {
    // post will be liked my mahima
    axios.put(`http://localhost:8800/api/posts/${post._id}/like`, {
      userId: currentUserId,
    });
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  // liked section
  function handleSaved() {
    // post will be liked my mahima

    axios.put(`http://localhost:8800/api/users/save/${post._id}`, {
      userId: currentUserId,
    });
    setIsSaved(!isSaved);
  }
  return (
    <>
      <Feed>
        <TopSection>
          <Left>
            <Outline>
              <img src={PF + user.profilePicture} alt="" />
            </Outline>
            <Link to={`/${user.username}`}>
              <h4>{user.username}</h4>
            </Link>
          </Left>
          <Right onClick={handleOptions}>
            <div></div>
            <div></div>
            <div></div>
          </Right>
          {showOptions && <PostOptions handleOptions={handleOptions} />}
        </TopSection>

        <MiddleSection ref={middleSection}>
          <Slides ref={postSlides}>
            {post.images.map((url) => (
              <img src={PF + url} alt="" />
            ))}
          </Slides>
          <LeftSlidePostButton ref={leftSlidePostBtn} onClick={postSlideLeft}>
            <img src="images/arrow-left.png" alt="" />
          </LeftSlidePostButton>
          <RightSlidePostButton
            ref={rightSlidePostBtn}
            onClick={postSlideRight}
          >
            <img src="images/arrow-right.png" alt="" />
          </RightSlidePostButton>
        </MiddleSection>

        <BottomSection>
          <TopButtons>
            <LeftIcons>
              <button onClick={handleLiked}>
                <img
                  src={isLiked ? "images/hearted.svg" : "images/heart.svg"}
                  alt=""
                />
              </button>
              <button>
                <img src="images/comment.svg" alt="" />
              </button>
              <button>
                <img src="images/send.svg" alt="" />
              </button>
            </LeftIcons>
            <div className="middle_icons">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <SavedIcon onClick={handleSaved}>
              <img
                src={isSaved ? "images/saved.svg" : "images/save.svg"}
                alt=""
              />
            </SavedIcon>
          </TopButtons>
          <LikesBtn
            onClick={() => {
              handleLikes();
            }}
          >
            {like} {like.length > 1 ? "likes" : "like"}
          </LikesBtn>
          {showLikes && <Likes handleLikes={handleLikes} postId={post._id} />}
          <NameAndDescription>
            <Link to="">
              <h4>{user.username} </h4>
            </Link>
            <p>{post.description}</p>
          </NameAndDescription>
          <ViewCommentsBtn>View all 205 comments</ViewCommentsBtn>
          <PostTime>{format(post.createdAt)}</PostTime>
        </BottomSection>

        {/* <!-- comment section --> */}
        <PostCommentsSection>
          <button>
            <img src="images/smiley.svg" alt="" />
          </button>
          <input type="text" placeholder="Add a comment..." />
          <PostCommentBtn>Post</PostCommentBtn>
        </PostCommentsSection>
      </Feed>
    </>
  );
}

const Feed = styled.div`
  background-color: white;
  border: 1px solid var(--border-color);
  max-width: 616px;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0px 21px 0px 16px;
  border-bottom: 1px solid var(--border-color);

  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: 2px solid white;
    background-color: white;
    /* outline: 2px solid linear-gradient(to right, red, purple); */
  }
`;
const Outline = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #f99f4d, #c42e92);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h4 {
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Right = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  padding: 20px 0px 20px 20px;

  div {
    width: 3px;
    height: 3px;
    border-radius: 50px;
    background-color: #262626;
  }
`;

const MiddleSection = styled.div`
  overflow: hidden;
  position: relative;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Slides = styled.div`
  display: flex;
  transition: all 0.5s ease;

  img {
    width: 100%;
    flex: 0 0 auto;
  }
`;

const LeftSlidePostButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
`;

const RightSlidePostButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
`;

const BottomSection = styled.div`
  padding: 19px 16px;

  button {
    cursor: pointer;
  }
`;

const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftIcons = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 24px;
  }

  button {
    &:hover {
      filter: brightness(3.5);
      cursor: pointer;
    }
  }
`;

const SavedIcon = styled.button`
  img {
    height: 24px;
  }

  button {
    &:hover {
      filter: brightness(3.5);
      cursor: pointer;
    }
  }
`;

const LikesBtn = styled.button`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const NameAndDescription = styled.div`
  margin-top: 6px;

  & > * {
    display: inline;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    display: inline;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

const ViewCommentsBtn = styled.button`
  border: 0;
  background-color: transparent;
  color: #8e8e8e;
  cursor: pointer;
`;

const PostTime = styled.p`
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
  margin-top: 6px;
`;

const PostCommentsSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding: 15px 16px;

  input {
    flex-grow: 1;
    border: 0;

    &::placeholder {
      color: grey;
    }

    &:focus {
      outline: none;
    }
  }

  img {
    width: 24px;
    box-sizing: content-box;
    padding-right: 15px;
    cursor: pointer;
  }
`;

const PostCommentBtn = styled.button`
  font-weight: 600;
  color: #0095f6;
  cursor: pointer;
`;
