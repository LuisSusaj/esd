import styled from "styled-components";

export const WhereWeTaughtSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Link = styled("a")`
  font-size: 21px;
  padding: 0.75rem 0 0.75rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: underline;
`;

export const ContentWrapper = styled("div")`
  max-width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    max-width: 100vw;
    padding-left: 10px;
    align-items: flex-start !important;
  }
`;
