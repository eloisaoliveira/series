import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Serie {
  idSerie: number;
  nomeSerie: string;
  dataSerie: string;
}

interface SerieContextType {
  series: Serie[];
  fetchSeries: (query?: string) => Promise<void>;
}

interface SeriesProviderProps {
  children: ReactNode
}

export const SeriesContext = createContext({} as SerieContextType);

export function SeriesProvider({ children }: SeriesProviderProps) {
  const [series, setSeries] = useState<Serie[]>([]);

  async function fetchSeries(query?: string) {
    const response = await api.get('/series', {
      params: {
        q: query,
      }
    })
    
    setSeries(response.data)
  }

  useEffect(() => {
    fetchSeries()
  }, []);

  return (
    <SeriesContext.Provider value={{
      series,
      fetchSeries
    }}>
      {children}
    </SeriesContext.Provider>
  );
}