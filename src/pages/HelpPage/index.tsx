import { Title } from "./styles";
import { Container, InformativeText } from "./styles";
import buscadorTema from "../../../public/assets/buscador-tema.png";
import buscadorData from "../../../public/assets/buscador-data.png";
import buscadorAutor from "../../../public/assets/buscador-autor.png";
import buscadorNomes from "../../../public/assets/buscador-nomes.png";
import buscadorLugares from "../../../public/assets/buscador-lugares.png";
import buscadorTematica from "../../../public/assets/buscador-tematica.png";
import buscadorTitulo from "../../../public/assets/buscador-título.png";
import buscadorCapitania from "../../../public/assets/buscador-capitania.png";
import { Header, StyledFaArrowLeft } from "../resultPage/styles";
import { useNavigate } from "react-router-dom";




const HelpPage = () => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
      };
  return (
    <Container>
         <Header>
        <span onClick={goBackHome}>
          <StyledFaArrowLeft />
          <h2>Fazer a busca</h2>
        </span>
      </Header>
      <Title>A seguir, uma explicação de como você pode realizar um busca:</Title>
      <InformativeText>
        <p>
          Tema é o único campo obrigatório para que a busca seja realizada. Você
          pode buscar por <strong>política</strong> ou <strong>economia</strong>{" "}
          ou <strong>cultura</strong> ou <strong>relacionamentos</strong>.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorTema})`,
          backgroundSize: "",
        }}
      ></div>
      <InformativeText>
        <p>
          Data não é um campo obrigatório, mas você pode fornecer uma data
          incial e uma final, desse modo o retorno da pesquisa será mais
          específico. A seguir, um exemplo que retornará artigos que possuem
          datas de <strong>1500</strong> até <strong>1815</strong>
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorData})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
          Autor não é um campo obrigatório, mas você pode fornecer o nome de um autor ou de autores, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorAutor})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
        Temática não é um campo obrigatório, mas você pode fornecer uma temática ou temáticas, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorTematica})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
        Capitania não é um campo obrigatório, mas você pode fornecer uma Capitania ou várias Capitanias, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorCapitania})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
        Lugares não é um campo obrigatório, mas você pode fornecer um lugares ou vários lugares, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorLugares})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
        Nomes não é um campo obrigatório, mas você pode fornecer um ou vários nomes, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorNomes})`,
          backgroundSize: "",
        }}
      ></div>

<InformativeText>
        <p>
        Título não é um campo obrigatório, mas você pode fornecer um título, desse modo o retorno da pesquisa será mais
          específico.
        </p>
      </InformativeText>
      <div
        style={{
          width: "100%",
          height: "100px",
          paddingRight: '40px',
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1px)",
          borderRadius: "2px",
          backgroundPosition: "center",
          backgroundImage: `url(${buscadorTitulo})`,
          backgroundSize: "",
        }}
      ></div>
    </Container>
  );
};
export default HelpPage;
