import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/Container.styled";
// import { Link } from "react-router-dom";

export default function Stories() {
  let storiesSection = useRef();
  let container = useRef();
  let leftSlideButton = useRef();
  let rightSlideButton = useRef();
  let position = 0;

  useEffect(() => {
    // select the left part of stories
    let storiesSectionPosition =
      storiesSection.current.getBoundingClientRect().left;

    // select the left part of stories container
    let containerPosition = container.current.getBoundingClientRect().left;

    // calculate the difference
    let startDifference = containerPosition - storiesSectionPosition;

    // if no difference, do not display left button
    if (startDifference === 1) {
      leftSlideButton.current.style.display = "none";
    }
  }, []);

  const handleLeftSlide = () => {
    // select the left part of stories
    let storiesSectionPosition =
      storiesSection.current.getBoundingClientRect().left;

    // select the left part of stories container
    let containerPosition = container.current.getBoundingClientRect().left;

    // calculate the difference
    let startDifference = containerPosition - storiesSectionPosition;

    if (startDifference + 320 >= 0) {
      leftSlideButton.current.style.display = "none";
    }

    if (startDifference <= 1) {
      if (startDifference + 320 > 1) {
        position = position - startDifference;
      } else {
        position = position + 320;
      }

      container.current.style.transform = `translateX(${position}px)`;
      rightSlideButton.current.style.display = "block";
    }
  };

  const handleRightSlide = () => {
    // select the right part of stories
    let storiesSectionPositionRight =
      storiesSection.current.getBoundingClientRect().right;

    // select the right part of stories container
    let containerPositionRight =
      container.current.getBoundingClientRect().right;

    // calculate the difference
    let endDifference = containerPositionRight - storiesSectionPositionRight;

    if (endDifference - 320 <= 0) {
      rightSlideButton.current.style.display = "none";
    }

    if (endDifference >= 0) {
      if (endDifference - 320 < 0) {
        position = position - endDifference;
      } else {
        position = position - 320;
      }

      container.current.style.transform = `translateX(${position}px)`;
      leftSlideButton.current.style.display = "block";
    }
  };

  return (
    <>
      <StoriesSection ref={storiesSection}>
        <Container ref={container}>
          <Story>
            <Outline>
              <img src="images/leo.jpg" alt="" />
            </Outline>
            <h4>leonardo_dicaprio</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/purti.jpg" alt="" />
            </Outline>
            <h4>nishant_biswas</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/masai.jpg" alt="" />
            </Outline>
            <h4>masai</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/aeforia.jpg" alt="" />
            </Outline>
            <h4>aeforia</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/beeple.jpg" alt="" />
            </Outline>
            <h4>beeple</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>baugasm</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
          <Story>
            <Outline>
              <img src="images/baugasm.jpg" alt="" />
            </Outline>
            <h4>Name</h4>
          </Story>
        </Container>
        {/* <!-- stories container ends --> */}
        <LeftSlideBtn ref={leftSlideButton} onClick={handleLeftSlide}>
          <img src="images/arrow-left.png" alt="" />
        </LeftSlideBtn>
        <RightSlideBtn ref={rightSlideButton} onClick={handleRightSlide}>
          <img src="images/arrow-right.png" alt="" />
        </RightSlideBtn>
      </StoriesSection>
    </>
  );
}

const StoriesSection = styled.div`
  background-color: white;
  border: 1px solid var(--border-color);
  max-width: 616px;
  margin-top: calc(29px + 55px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${Container} {
    max-width: none;
    display: flex;
    gap: 16px;
    padding: 18px 18px 14px 18px;
    transition: all 0.5s ease;
    position: relative;
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    color: #262626;
    max-width: 64px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: 2px solid white;
    background-color: white;
    /* outline: 2px solid linear-gradient(to right, red, purple); */
  }
`;

const Outline = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(to right, #f99f4d, #c42e92);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSlideBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  cursor: pointer;
`;

const RightSlideBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  cursor: pointer;
`;
