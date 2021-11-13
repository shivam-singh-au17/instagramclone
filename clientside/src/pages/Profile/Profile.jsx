import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Header } from "./Header";
import { DispayPosts } from "./DisplayPosts";
import { SinglePost } from "./SinglePost";
import axios from "axios";
import {
  CancelButton,
  DisplaySinglePost,
  LeftButton,
  RightButton,
} from "./ProfilePageUI";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 975px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 20px;
  min-height: 100vh;
  /* background-color: burlywood; */
`;

const Profile = () => {
  const [selectedPost, setSelectedPost] = useState(-1);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();
  const { userId } = params;
  console.log("userId: ", userId);

  useEffect(() => {
    // fetch user post
    const fetchUserPost = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/posts/user/${userId}`
      );
      setPosts(res.data);
    };
    fetchUserPost();
  }, []);

  useEffect(() => {
    // current fetch user
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/users/${userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  const handlePostClick = (e) => {
    setSelectedPost(e);
  };

  return (
    <>
      <Container>
        <Header user={user} />
        {/* <Routes>
              <Route path='/posts' component={DispayPosts} />
              <Route path='/reels' component={} />
              <Route path='/tagged' component={} />
          </Routes> */}
        <DispayPosts {...posts} handlePostClick={handlePostClick} />
        {selectedPost >= 0 ? (
          <>
            <DisplaySinglePost>
              <CancelButton onClick={() => setSelectedPost(-1)}>
                <svg
                  aria-label="Close"
                  class="_8-yf5 "
                  color="#ffffff"
                  fill="#ffffff"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </CancelButton>
              {selectedPost > 0 ? (
                <LeftButton
                  onClick={() => {
                    if (selectedPost > 0)
                      return setSelectedPost(selectedPost - 1);
                  }}
                >
                  <svg
                    aria-label="Go Back"
                    class="_8-yf5 "
                    color="#000000"
                    fill="#000000"
                    height="16"
                    role="img"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                  </svg>
                </LeftButton>
              ) : null}
              {posts.map((el, index) => {
                if (index === selectedPost) {
                  return (
                    <SinglePost
                      {...el}
                      user={el.username}
                      profileImg={el.profileImg}
                      is_verified={el.is_verified}
                    />
                  );
                } else {
                  return null;
                }
              })}
              {selectedPost < posts.length - 1 ? (
                <RightButton
                  onClick={() => {
                    return setSelectedPost(selectedPost + 1);
                  }}
                >
                  <svg
                    aria-label="Next"
                    class="_8-yf5 "
                    color="#000000"
                    fill="#000000"
                    height="16"
                    role="img"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                  </svg>
                </RightButton>
              ) : null}
            </DisplaySinglePost>
          </>
        ) : null}
      </Container>
    </>
  );
};

export { Profile };
