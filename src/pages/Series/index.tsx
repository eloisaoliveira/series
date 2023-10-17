import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { SeriesContainer, SeriesTable } from "./styles";
import { SeriesContext } from "../../contexts/SeriesContext";
import { dateFormatter } from '../../utils/formatter';
import { Trash } from "phosphor-react";

export function Series() {
  const { series, deletSerie } = useContext(SeriesContext)
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
                  <td><Trash size={24} style={{color: 'red'}}  onClick={() => deletSerie(serie.idSerie)} /></td>
                </tr>
              )
            })}
          </tbody>
        </SeriesTable>
      </SeriesContainer>
    </div>
  )
}