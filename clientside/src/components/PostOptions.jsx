import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PostOptions({ handleOptions }) {
  return (
    <>
      <OuterContainer onClick={handleOptions}>
        <OptionsContainer>
          <Option>
            <button>Report</button>
          </Option>
          <Option>
            <button>Unfollow</button>
          </Option>
          <Option>
            <button>Go to post</button>
          </Option>
          <Option>
            <button>Share to...</button>
          </Option>
          <Option>
            <button>Copy Link</button>
          </Option>
          <Option>
            <button>Embed</button>
          </Option>
          <Option>
            <button>Cancel</button>
          </Option>
        </OptionsContainer>
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

const OptionsContainer = styled.div`
  width: 400px;
  max-height: calc(100% - 40px);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: 1px;
  height: 356px;
  overflow: hidden auto;
  background-color: var(--border-color);
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: white;

  &:nth-child(1) button,
  &:nth-child(2) button {
    color: #ed4956;
    font-weight: 600;
  }
`;
