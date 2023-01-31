import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const FooterStyled = styled.footer`
  background-color: #4c346b;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoStore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 5rem 3rem 5rem;
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: right;
  align-items: center;
  gap: 5rem;
`;

export const LogoDiv = styled.img`
  width: 15rem;
  height: 100%;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: 100%;
  align-items: left;

  p {
    color: #fff;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #ff6e6c;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;
  }

  li {
    color: #fff;
  }

  li:hover {
    color: #ff6e6c;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  width: 45rem;

  p {
    font-size: 0.75rem;
    color: #fff;
  }
`;

export const GitHubIcon = styled(AiFillGithub)`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0.4rem;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  font-size: 1.2rem;
  color: #fff;
`;
