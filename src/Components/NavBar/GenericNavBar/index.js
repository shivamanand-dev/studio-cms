import React from "react";

import Data from "./datanavBar";
import SocialData from "./socialNavBar";
import { StyledGenericNavBar } from "./StyledGenericNavBar";

const GenericNavBar = () => {
  return (
    <StyledGenericNavBar>
      <div className="header-container main-container">
        <h3>AppStorm</h3>
        <nav>
          <ul>
            {Data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-social-links">
          <ul>
            {SocialData.map((social) => (
              <li key={social.key} className="social-media-item">
                <a href={social.link}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledGenericNavBar>
  );
};

export default GenericNavBar;
