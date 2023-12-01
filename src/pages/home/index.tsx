/* eslint-disable no-useless-escape */
import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
import { BsSearch } from "react-icons/bs";
import apiService from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import searchContext from "../../context";
import { FormData } from "../../types";
import { toast } from "react-toastify";
import fieldsContext from "../../context/field";
const Home = () => {
  const { setSearch } = useContext(searchContext)
  const { setField } = useContext(fieldsContext)

  const navigate = useNavigate();
    //const [search, setSearch] = useState<FormData[]>([])
    const [loading, setLoading] = useState(false);
    const schema = yup.object().shape(({
          autores: yup.string(),
          anoPub: yup.string(),
          capitania: yup.string(),
          fonte: yup.string(),
          lugares: yup.string(),
          nomes: yup.string(),
          temas: yup.string().required("O campo 'Temas' é obrigatório"),
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
         
        setLoading(true);
        setField(data)

        await apiService.post('/search', data)
        .then((response)  =>  {
           setSearch(response.data.searchThoseBooks)
           console.log(response.data.searchThoseBooks)
                     if (response.status === 200) {
            navigate('/search')
          }
        })
        .catch((error) => {
          toast.error('Nenhum artigo encontrado')
          console.log(error)})
        .finally(() => {
         
          setLoading(false);
        })
      }
  return (
   
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
                {/* <label style={{ color: '#000' }}>Insira seu melhor autores</label> */}
                <input
                  placeholder="Temas: políticas, relacionamentos etc"
                  {...register("temas")}
                />
                {errors.temas && (
                  <p
                    style={{
                      color: "#000",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.temas.message}
                  </p>
                )}
              </div>
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
                  placeholder="Capitania: São Paulo, Pernambuco etc"
                  {...register("capitania")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "#000",
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
                  placeholder="Lugares: Ceará, Goiás etc"
                  {...register("lugares")}
                />
                {errors.autores && (
                  <p
                    style={{
                      color: "#000",
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
                  placeholder="Nomes: Maria de Santos, Manuel etc"
                  {...register("nomes")}
                />
                {errors.nomes && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {errors.nomes.message}
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
                  className="page-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Spin
                      rootClassName="loading-spin"
                    />
                  ) : (
                    <div>
                    <BsSearch />
                    <p>Pesquisar</p>
                    </div>
                    

                  )}
                </button>
            </>
          {/* )} */}
          
        </form>
        {/* {search.map((item,index) => (
            
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
        } */}

      </Container>
   
  );
};

export default Home;
