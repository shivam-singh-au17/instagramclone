import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Likes({ handleLikes, postId }) {
  const [likedBy, setLikedBy] = useState([]);
  const users = [];

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
      const userIds = res.data.likes;

      for (let i = 0; i < userIds.length; i++) {
        // Perform asynchronous actions and await them, it will work
        const response = await axios.get(
          `http://localhost:8800/api/users/${userIds[i]}`
        );
        users.push(response.data);
      }
      setLikedBy(users);
    };
    fetchPost();
  }, []);

  return (
    <>
      <OuterContainer>
        <LikesContainer>
          <Heading>
            <h4>Likes</h4>
            <button
              onClick={() => {
                handleLikes();
              }}
            >
              <img src="images/cross.svg" alt="" />
            </button>
          </Heading>

          <Users>
            {likedBy.map((user) => (
              <User>
                <ProfileSection>
                  <img src={`images/${user.profilePicture}`} alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>{user.username}</h4>
                    </Link>
                    <p>{user.name}</p>
                  </UsernameAndName>
                </ProfileSection>
                <button>Follow</button>
              </User>
            ))}
          </Users>
        </LikesContainer>
      </OuterContainer>
    </>
  );
}

const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikesContainer = styled.div`
  width: 400px;
  max-height: calc(100% - 40px);
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Heading = styled.div`
  height: 42px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  position: relative;

  button img {
    position: absolute;
    top: 12px;
    right: 15px;
    height: 18px;
  }
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 356px;
  overflow: hidden auto;
  padding: 0px 16px;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #0095f6;
    color: white;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    border-radius: 4px;

    &:active {
      background-color: #4eb8ff;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h4 {
    font-weight: 600;
  }

  p {
    color: #8e8e8e;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50px;
    margin-left: 4px;
    object-fit: cover;
  }
`;

const UsernameAndName = styled.div`
  display: flex;
  flex-direction: column;
`;
