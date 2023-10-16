import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { SeriesContext } from "../../../../contexts/SeriesContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchSeries } = useContext(SeriesContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchSeries(data: SearchFormInputs) {
    await fetchSeries(data.query)

    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchSeries)}>
      <input
        type="text"
        placeholder="Busque por séries"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}