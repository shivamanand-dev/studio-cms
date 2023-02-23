import styled from "styled-components";

export const StyledGenericNavBar = styled.section`
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    padding-top: 1rem;
  }
  ul li {
    list-style-type: none;
    display: inline;
    margin-right: 1.5rem;
  }
  li:last-of-type {
    margin-right: 0;
  }

  a {
    text-decoration: none;
  }
  .social-media-item {
    color: black;
    height: 1rem;
    width: 1rem;
  }
`;
