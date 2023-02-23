/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useRouter } from "next/router";
import React from "react";

import { navbarData, socialLinkData } from "@/utils/constants/app_constants";

import { StyledGenericNavBar } from "./StyledGenericNavBar";

const GenericNavBar = ({ title = "Appstrom" }) => {
  const router = useRouter();

  const routePage = (link) => {
    router.push(link);
  };
  return (
    <StyledGenericNavBar>
      <div className="header-container main-container">
        <div className="header-logo">
          <h3 className="logo">{title}</h3>
        </div>
        <nav>
          <ul>
            {navbarData.map((item) => {
              return (
                <li key={item.id}>
                  <p
                    onClick={() => {
                      routePage(item.link);
                    }}
                    onKeyDown={() => {
                      routePage(item.link);
                    }}
                  >
                    {item.title}
                  </p>
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
