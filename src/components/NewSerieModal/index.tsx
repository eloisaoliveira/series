import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { CloseButton, Content, Overlay } from './styles';

const newSerieFormSchema = z.object({
  name: z.string(),
  date: z.string(),
});

type NewSerieFormInputs = z.infer<typeof newSerieFormSchema>;

export function NewSerieModal() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewSerieFormInputs>({
    resolver: zodResolver(newSerieFormSchema),
  })

  async function handleCreateNewSerie(data: NewSerieFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Série</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewSerie)}>
          <input
            type="text"
            placeholder="Nome da Série"
            required
            {...register('name')}
          />
          <input
            type="data"
            placeholder="Data de lançamento"
            required
            {...register('date')}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}