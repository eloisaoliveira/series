import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";

import { CloseButton, Content, Overlay } from './styles';

export function NewSerieModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Série</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Nome da Série" required />
          <input type="data" placeholder="Data de lançamento" required />

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}