import styled from "styled-components";

export const StyledTransparentBtn = styled.section`
  button {
    background-color: transparent;
    border-color: transparent;
    font-weight: 600;
    color: ${(props) => (props.btnVariant === "dark" ? "#3c3c3c" : "#eeeeee")};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    cursor: pointer;
    padding: 0.5rem;
  }
`;
