import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { BioPart, CancelButton, StyledLink } from "./ProfilePageUI";

const Container = styled.div`
  /* margin-bottom: 30px; */
  display: flex;
  flex-direction: row;
  vertical-align: baseline;
  height: 230px;
`;

const LeftPart = styled.div`
  width: 290px;
  text-align: center;
  /* background-color: grey; */
  margin-right: 30px;
  display: flex;
  justify-content: center;

  .profileImg {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
  }

  .showStoryBorder {
    background-image: linear-gradient(
      45deg,
      #ffa95f 5%,
      #f99c4a 15%,
      #f47838 30%,
      #e75157 45%,
      #d92d7a 70%,
      #cc2a92 80%,
      #c32e92 95%
    );
    box-sizing: border-box;
    overflow: hidden;
    padding: 5px;
    cursor: pointer;

    ::-webkit-scrollbar {
      width: 0 !important;
      background: transparent !important;
    }
  }
`;

const RightPart = styled.div`
  /* background-color: azure; */
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 20px;

  ul {
    display: flex;
    justify-content: left;
    padding-inline-start: 0px;
  }

  li {
    list-style-type: none;
    margin-right: 40px;
  }
`;

const Name = styled.div`
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
`;

const BlueTick = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border-top: 1px solid #dbdbdb;
  color: #8e8e8e;

  ul {
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: auto;
    justify-content: space-around;

    li {
      list-style-type: none;
      padding: 20px;
      z-index: 10;

      svg {
        color: #8e8e8e;
        fill: #8e8e8e;
        margin-right: 5px;
      }

      &:hover {
        color: #262626;
        cursor: pointer;
        border-top: 1px solid #262626;
        margin-top: -1px;
      }

      &svg:hover {
        color: #262626;
        fill: #262626 !important;
      }
    }
  }
`;

const StoryDisplay = styled.div`
  z-index: 300;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #1b1b1a;
  display: flex;
  justify-content: center;
  align-items: center;

  .storySubDiv {
    width: 450px;
    height: 700px;
    background-color: black !important;
    display: flex;
    align-items: center;
    border-radius: 10px;
    position: relative;
    justify-content: space-around;
    background: linear-gradient(
          to bottom,
          rgba(226, 224, 224, 0.6) 0%,
          rgba(255, 255, 255, 0) 20%
        )
        top,
      linear-gradient(
          to top,
          rgba(226, 224, 224, 0.6) 0%,
          rgba(255, 255, 255, 0) 20%
        )
        bottom;
    z-index: 1;

    .storyImg {
      width: 100%;
      z-index: 0;
    }
  }

  .storyHeader {
    display: flex;
    position: absolute;
    top: 20px;
    left: 10px;
    /* background-color: burlywood; */
    width: 100%;
    height: fit-content;
    align-items: center;
    font-size: 14px;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    box-sizing: border-box;

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 100%;
      margin-right: 10px;
    }
  }
`;

const Header = ({ user }) => {
  console.log("user: ", user.followers.length);
  const [showStory, setShowStory] = useState(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [statusInterval, setStatusInterval] = useState(undefined);
  let statusInterval = undefined;

  const ProgressBarContainer = styled.div`
    position: absolute;
    width: 95%;
    height: 3px;
    margin: auto;
    background: rgb(207, 207, 207);
    top: 8px;
    border-radius: 10px;
  `;

  const ProgressBar = styled.div`
    width: ${({ progress }) => `${progress}%`};
    height: 3px;
    background: white;
    border-radius: 10px;
  `;

  useEffect(() => {
    if (running) {
      let temp = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(statusInterval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(statusInterval);
      setShowStory(false);
    }
  }, [progress]);

  return <></>;
};

export { Header };
