import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { SeriesContainer, SeriesTable } from "./styles";

export function Series() {
  return (
    <div>
      <Header />

      <SeriesContainer>
        <SearchForm />
        <SeriesTable>
          <tbody>
            <tr>
              <td width="50%">Supernatural</td>
              <td>Data lançamento</td>
              <td>15/09/2005</td>
            </tr>
            <tr>
              <td width="50%">Stranger Things</td>
              <td>Data lançamento</td>
              <td>15/07/2016</td>
            </tr>
            <tr>
              <td width="50%">The Blacklist</td>
              <td>Data lançamento</td>
              <td>23/09/2013</td>
            </tr>
          </tbody>
        </SeriesTable>
      </SeriesContainer>
    </div>
  )
}