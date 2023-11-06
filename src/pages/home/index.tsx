import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// falta anoI, datas 
const Home = () => {
    const schema = yup.object({
        autores: yup
          .string()
          .email("Email inválido")
          .required("Preencha o campo com um email válido."),
    
        // password: yup
        // 	.string()
        // 	.min(8, 'Sua senha deve possuir, no mínimo, 8 caracteres.')
        // 	.max(64)
        // 	.required('Preencha o campo com sua senha.'),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
  return (
    <Container>
        <Container>
        <form //onSubmit={handleSubmit(onSubmit)}
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
                  placeholder="Ano de publicação"
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
                  placeholder="Fonte"
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
                  placeholder="Lugares"
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
                  placeholder="Nomes"
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
                  placeholder="Temas"
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
                  placeholder="Temáticas: relacionamentos, família etc"
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
                  placeholder="Título"
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
              <button
               // onClick={handleSubmit(sendEmailAndPassword)}
                className="btn-default"
                style={{
                  color: "#fff",
                  height: "45px",
                  backgroundColor: "#050504",
                }}
                type="submit"
              >
                Buscar
              </button>
            </>
          {/* )} */}
        
        </form>
      </Container>
    </Container>
  );
};

export default Home;
