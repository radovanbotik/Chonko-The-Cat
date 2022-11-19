import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  width: 100%;
  /* height: ${props => (props.extended ? "100vh" : "auto")}; */

  padding: 2rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const NavigationLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: auto;
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 150px;
  /* object-fit: cover; */
`;

const NavigationLinks = styled.div`
  justify-self: end;
  display: flex;
  gap: 1ex;
  background-color: red;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavigationControl = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: gold; */
  display: flex;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  color: white;
`;

const NavigationToggle = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavigationExtended = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  Navigation,
  NavigationLogo,
  Logo,
  NavigationLinks,
  NavigationLink,
  NavigationControl,
  NavigationToggle,
  NavigationExtended,
};
