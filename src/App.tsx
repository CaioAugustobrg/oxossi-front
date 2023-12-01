import GlobalHomeStyle from "./styles/global.styles"
import searchContext from "./context"; 
import fieldsContext from "./context/field"
import { useState } from "react";
import AppRoutes from "./routes";
import { FormData } from "./types";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [search, setSearch] = useState<FormData[]>([]);
  const [field, setField] = useState<FormData>({});
  
  return (
    <>
    <searchContext.Provider value={{search, setSearch}}>
      <fieldsContext.Provider value={{field, setField}}>
     <AppRoutes />
     <GlobalHomeStyle />
      </fieldsContext.Provider>
    </searchContext.Provider>
    
     <ToastContainer />
    </>
  )
}

export default App
