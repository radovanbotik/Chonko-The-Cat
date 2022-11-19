import React from "react";
import LogoIMG from "../assets/cica-logo.png";
import { useState } from "react";
import {
  Navigation,
  NavigationLogo,
  Logo,
  NavigationLinks,
  NavigationLink,
  NavigationControl,
  NavigationExtended,
  NavigationToggle,
} from "./styles/Navbar.style";

export default function Navbar() {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <Navigation extended={isExtended}>
      <NavigationControl>
        <NavigationLogo>
          <Logo src={LogoIMG} />
          <h2>CHONKO</h2>
        </NavigationLogo>
        <NavigationLinks>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
          <NavigationLink to="/pricing">Pricing</NavigationLink>
        </NavigationLinks>
        <NavigationToggle onClick={e => setIsExtended(prev => !prev)}>
          {isExtended ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </NavigationToggle>
      </NavigationControl>
      {isExtended && (
        <NavigationExtended>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
          <NavigationLink to="/pricing">Pricing</NavigationLink>
        </NavigationExtended>
      )}
    </Navigation>
  );
}
