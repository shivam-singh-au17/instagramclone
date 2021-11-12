import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Likes({ handleLikes }) {
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
            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>dheeraj</h4>
                  </Link>
                  <p>Dheeraj Bisht</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Shivam Singh</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>

            <User>
              <ProfileSection>
                <img src="images/user-1.jpg" alt="" />
                <UsernameAndName>
                  <Link to="/">
                    <h4>yash</h4>
                  </Link>
                  <p>Suggested for you</p>
                </UsernameAndName>
              </ProfileSection>
              <button>Follow</button>
            </User>
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
    border-radius: 50px;
    margin-left: 4px;
  }
`;

const UsernameAndName = styled.div`
  display: flex;
  flex-direction: column;
`;
