/* eslint-disable no-useless-escape */
import { Container, Results } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import apiService from "../../services/api";
import { useState } from "react";
// falta anoI, datas 
type FormData = {
    autores?: string;
    //anoPub?: string;
    capitania?: string;
   // fonte?: string;
    lugares?: string;
    nomes?: string;
    temas?: string;
  //  tematicas?: string;
  temaPercent?: string
  link?: string
    titulo?: string;
  }
const Home = () => {
    const [search, setSearch] = useState<FormData[]>([])
    const schema = yup.object().shape(({
        autores: yup.string(),
          anoPub: yup.string(),
          capitania: yup.string(),
          fonte: yup.string(),
          lugares: yup.string(),
          nomes: yup.string(),
          temas: yup.string(),
          tematicas: yup.string(),
          titulo: yup.string()

    
        // password: yup
        // 	.string()
        // 	.min(8, 'Sua senha deve possuir, no mínimo, 8 caracteres.')
        // 	.max(64)
        // 	.required('Preencha o campo com sua senha.'),
      }));
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = async (data: FormData) => {
        await apiService.post('/search', data)
        .then((response) => setSearch(response.data.filteredJson))
        .catch((error) => console.log(error))
      }
  return (
    <Container>
        <Container>
        <form onSubmit={handleSubmit(onSubmit)}
        >
          <h4>Buscador de documentos coloniais</h4>
         
          <div>
            {/* <button className="btn-default" >
              <i style={{ color: "gray" }}>
               
              </i>
            </button> */}
          </div>
           {/* {showEmailInputs && ( */}
           <>
              <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor email</label> */}
                <input
                  placeholder="Autor"
                  {...register("autores")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
            
                <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Capitania"
                  {...register("capitania")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
              <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Lugares"
                  {...register("lugares")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
              <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Nomes"
                  {...register("nomes")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
              <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Temas"
                  {...register("temas")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
           
              <div className="input-container">
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Título"
                  {...register("titulo")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.autores.message}
                  </p>
                )}
              </div>
              <button
               // onClick={handleSubmit(sendEmailAndPassword)}
                className="btn-default"
                type="submit"
              >
                Buscar
              </button>
            </>
          {/* )} */}
          
        </form>
        {search.map((item,index) => (
            
            <Results key={index}>
                <span><h5>Título: </h5><h6>{item?.titulo}</h6></span>
                <span><h5>Autores: </h5><h6>{item?.autores}</h6></span>

                <span><h5>Capitania: </h5><h6>{item?.capitania}</h6></span>
                <span><h5>Lugares: </h5><h6> {item?.lugares ? item.lugares.replace(/[\[\]']/g, '') : ''}</h6></span>
                <span><h5>Nomes: </h5><h6>{item?.nomes ? item.nomes.replace(/[\[\]']/g, '') : ''}</h6></span>
                <span><h5>Temas: </h5><h6>{item?.temas}</h6></span>
                <span><h5>Distribuição dos temas:</h5><h6> {item?.temaPercent}</h6></span>
                <span>
                 <h5>Link: </h5>
                <h6>
                {item?.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                    </a>
                    ) : ''}
                </h6>
                </span>
        </Results>
            
        ))
        }
      </Container>
    </Container>
  );
};

export default Home;
