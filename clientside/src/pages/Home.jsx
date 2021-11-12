import React from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Feeds from "../components/Feeds";
import FooterHome from "../components/FooterHome";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";


export default function Home() {

  return (
    <>
      <Navbar />

      <Container>
        <MainWrapper>
          <LeftWrapper>
            <Stories />
            <Feeds />
          </LeftWrapper>
          {/* <!-- left_wrapper ends --> */}

          <div className="right_wrapper_container">
            <RightWrapper>
              <ProfileSection>
                <img src="images/profile.jpg" alt="" />
                <div>
                  <Link to="/">
                    <h4>mrsagar105</h4>
                  </Link>
                  <p>Sagar Biswas</p>
                </div>
              </ProfileSection>
              {/* <!-- profile_section ends --> */}

              <SuggestionsSection>
                <HeadingSection>
                  <h3>Suggestions For You</h3>
                  <Link to="/">See All</Link>
                </HeadingSection>

                <User>
                  <ProfileSection>
                    <img src="images/user-1.jpg" alt="" />
                    <NameAndSuggested>
                      <Link to="/">
                        <h4>yash</h4>
                      </Link>
                      <p>Suggested for you</p>
                    </NameAndSuggested>
                  </ProfileSection>
                  <button>Follow</button>
                </User>

                <User>
                  <ProfileSection>
                    <img src="images/user-1.jpg" alt="" />
                    <NameAndSuggested>
                      <Link to="/">
                        <h4>yash</h4>
                      </Link>
                      <p>Suggested for you</p>
                    </NameAndSuggested>
                  </ProfileSection>
                  <button>Follow</button>
                </User>

                <User>
                  <ProfileSection>
                    <img src="images/user-1.jpg" alt="" />
                    <NameAndSuggested>
                      <Link to="/">
                        <h4>yash</h4>
                      </Link>
                      <p>Suggested for you</p>
                    </NameAndSuggested>
                  </ProfileSection>
                  <button>Follow</button>
                </User>

                <User>
                  <ProfileSection>
                    <img src="images/user-1.jpg" alt="" />
                    <NameAndSuggested>
                      <Link to="/">
                        <h4>yash</h4>
                      </Link>
                      <p>Suggested for you</p>
                    </NameAndSuggested>
                  </ProfileSection>
                  <button>Follow</button>
                </User>

                <User>
                  <ProfileSection>
                    <img src="images/user-1.jpg" alt="" />
                    <NameAndSuggested>
                      <Link to="/">
                        <h4>yash</h4>
                      </Link>
                      <p>Suggested for you</p>
                    </NameAndSuggested>
                  </ProfileSection>
                  <button>Follow</button>
                </User>
              </SuggestionsSection>

              {/* <!-- FOOTER --> */}
              <FooterHome />
            </RightWrapper>
            {/* <!-- right_wrapper ends --> */}
          </div>
          {/* <!-- right_wrapper_container ends --> */}
        </MainWrapper>
      </Container>
      {/* <!-- main_wrapper ends --> */}
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightWrapper = styled.div`
  position: fixed;
  top: 106px;
  width: 293px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  img {
    width: 56px;
    border-radius: 50px;
  }

  h4 {
    font-weight: 600;
  }

  p {
    color: #8e8e8e;
  }
`;

const SuggestionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 23px;

  h3 {
    color: #8e8e8e;
    font-weight: 600;
  }
`;

const HeadingSection = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 12px;
    font-weight: 600;
    color: #262626;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;

  ${ProfileSection} {
    gap: 12px;
  }

  p {
    font-size: 12px;
  }

  button {
    font-size: 12px;
    color: #0095f6;
    font-weight: 600;
  }

  img {
    width: 32px;
    border-radius: 50px;
    margin-left: 4px;
  }
`;

const NameAndSuggested = styled.div`
  display: flex;
  flex-direction: column;
`;
