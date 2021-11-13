import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import Search from "./Search";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch(e) {
    if (e.target.value.length) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }

  return (
    <NavSection>
      <Container>
        <Logo src="images/logo.png" alt="Instagram" />
        <input type="text" placeholder="Search" onChange={handleShowSearch} />
        {showSearch && <Search />}
        <Nav>
          <Link to="/">
            <img src="images/home.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="images/message.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="images/plus.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="images/compasss.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="images/heart.svg" alt="" />
          </Link>
          <Link to="/">
            <ProfileContainer>
              <img src="images/profile.jpg" alt="" />
            </ProfileContainer>
          </Link>
        </Nav>
      </Container>
    </NavSection>
  );
}

const NavSection = styled.header`
  width: 100%;
  height: 54px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 100;

  ${Container} {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  input {
    color: #262626;
    border: 1px solid #dbdbdb;
    min-width: 125px;
    width: 215px;
    height: 28px;
    padding: 0px 20px;
    text-align: center;
    background: url("images/search.png") no-repeat;
    background-position: center;
    background-position: 70px;
    background-size: 10px;
    background-color: #fafafa;
    border-radius: 3px;
    margin-left: 138px;

    &::placeholder {
      color: #8e8e8e;
      opacity: 1;
    }

    &:focus {
      outline: none;
      text-align: left;
      background-image: none;
      padding-left: 20px;
      background-position: 20px;
    }
  }
`;

const Logo = styled.img`
  margin-top: 6px;
`;

const Nav = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;

  img {
    width: 22px;
    display: block;
  }

  a:first-child img,
  a:nth-child(2) img {
    width: 21px;
    margin-right: 1px;
  }
`;

const ProfileContainer = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
