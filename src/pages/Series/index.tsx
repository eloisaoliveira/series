import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { SeriesContainer, SeriesTable } from "./styles";
import { SeriesContext } from "../../contexts/SeriesContext";
import { dateFormatter } from '../../utils/formatter';

export function Series() {
  const { series } = useContext(SeriesContext)
  return (
    <div>
      <Header />

      <SeriesContainer>
        <SearchForm />
        <SeriesTable>
          <tbody>
            {series.map(serie => {
              return (
                <tr key={serie.idSerie}>
                  <td width="50%">{serie.nomeSerie}</td>
                  <td>Data lançamento</td>
                  <td>{dateFormatter.format(new Date(serie.dataSerie))}</td>
                </tr>
              )
            })}
          </tbody>
        </SeriesTable>
      </SeriesContainer>
    </div>
  )
}