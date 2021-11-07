import styled from "styled-components";

export const Layout = styled.div`
  padding: 20px 10rem;

  @media (max-width: 750px) {
    padding: 20px 5rem;
  }

  @media (max-width: 600px) {
    padding: 20px 2rem;
  }
  @media (max-width: 400px) {
    padding: 20px 1.5rem;
  }
`;
