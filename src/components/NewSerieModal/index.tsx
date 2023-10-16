import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { SeriesContext } from '../../contexts/SeriesContext';

import { CloseButton, Content, Overlay } from './styles';

const newSerieFormSchema = z.object({
  nomeSerie: z.string(),
  dataSerie: z.string(),
});

type NewSerieFormInputs = z.infer<typeof newSerieFormSchema>;

export function NewSerieModal() {
  const { createSerie } = useContext(SeriesContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewSerieFormInputs>({
    resolver: zodResolver(newSerieFormSchema),
  })

  async function handleCreateNewSerie(data: NewSerieFormInputs) {
    const { nomeSerie, dataSerie } = data;

    await createSerie({
      nomeSerie,
      dataSerie
    });

    reset();
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
            {...register('nomeSerie')}
          />
          <input
            type="date"
            placeholder="Data de lançamento"
            required
            {...register('dataSerie')}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}