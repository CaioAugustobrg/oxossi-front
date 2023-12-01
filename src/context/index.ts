import { createContext, Dispatch, SetStateAction } from 'react';
import { FormData } from '../types';

interface SearchContextType {
  search: FormData[];
  setSearch: Dispatch<SetStateAction<FormData[]>>;
}
const searchContext = createContext<SearchContextType>({
  search: [],
  setSearch: () => {}
});


export default searchContext;
