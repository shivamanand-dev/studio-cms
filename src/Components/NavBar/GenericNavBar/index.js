import React from "react";

import { navbarData, socialLinkData } from "@/utils/constants/app_constants";

import { StyledGenericNavBar } from "./StyledGenericNavBar";

const GenericNavBar = () => {
  return (
    <StyledGenericNavBar>
      <div className="header-container main-container">
        <div className="header-logo">
          <h3 className="logo">AppStrom</h3>
        </div>
        <nav>
          <ul>
            {navbarData.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-social-links">
          <ul>
            {socialLinkData.map((social) => {
              return (
                <li key={social.key} className="social-media-item">
                  <a href={social.link}>{social.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledGenericNavBar>
  );
};

export default GenericNavBar;
