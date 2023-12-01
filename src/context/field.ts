import { createContext, Dispatch, SetStateAction } from 'react';
import { FormData } from '../types';

interface IFieldsContext {
  field: FormData;
  setField: Dispatch<SetStateAction<FormData>>;
}

const initialFormData: FormData = {
  autores: '',
  capitania: '',
  lugares: '',
  nomes: '',
  temas: '',
  temaPercent: '',
  link: '',
  titulo: ''
};

const fieldsContext = createContext<IFieldsContext>({
  field: initialFormData,
  setField: () => {}
});

export default fieldsContext;
