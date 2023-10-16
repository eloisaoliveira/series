import { HeaderContainer, HeaderContent, NewSerieButton } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      
        <NewSerieButton>Nova série</NewSerieButton>
      </HeaderContent>
    </HeaderContainer>
  );
}