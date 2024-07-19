import styled from "styled-components";
import { WHITE } from "../component/constants/color";

export default function RootLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background-color: ${WHITE};
  max-width: 390px;
  margin: 0 auto;
  min-height: 100vh;
`;