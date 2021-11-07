import styled from "styled-components";
import { Layout } from "./layout";

const NavLayout = styled(Layout)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #06d6a0;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 20px;
    color: white;

    &:hover {
      color: #079b73;
    }
  }
`;

export default NavLayout;
