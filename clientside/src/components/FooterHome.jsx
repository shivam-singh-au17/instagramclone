import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FooterHome() {
  return (
    <>
      <Footer>
        <ul>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Help</li>
          </Link>
          <Link to="/">
            <li>Press</li>
          </Link>
          <Link to="/">
            <li>API</li>
          </Link>
          <Link to="/">
            <li>Jobs</li>
          </Link>
          <Link to="/">
            <li>Privacy</li>
          </Link>
          <Link to="/">
            <li>Terms</li>
          </Link>
          <Link to="/">
            <li>Locations</li>
          </Link>
          <Link to="/">
            <li>Top Accounts</li>
          </Link>
          <Link to="/">
            <li>Hashtags</li>
          </Link>
          <Link to="/">
            <li>Language</li>
          </Link>
        </ul>

        <p>© 2021 Instagram from Meta</p>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  margin-top: 32px;

  ul {
    line-height: 17px;
  }

  ul a li {
    display: inline;
    color: #c7c7c7;
    font-size: 11px;
  }

  a:not(:last-child) li::after {
    content: ". ";
    margin-left: 3px;
    margin-right: -1.5px;
    position: relative;
    bottom: 2px;
  }

  p {
    margin-top: 17px;
    color: #c7c7c7;
    text-transform: uppercase;
    font-size: 11px;
  }
`;
