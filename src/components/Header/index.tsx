import { HeaderContainer, HeaderContent, NewSerieButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from "../../assets/logo.svg";
import { NewSerieModal } from "../NewSerieModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewSerieButton>Nova série</NewSerieButton>
        </Dialog.Trigger>

        <NewSerieModal />

      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}