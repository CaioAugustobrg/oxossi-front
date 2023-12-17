import React, { useContext } from "react";
import { Container, Header, StyledFaArrowLeft, UserField } from "./styles";
import searchContext from "../../context";
import { useNavigate } from "react-router-dom";
import fieldsContext from "../../context/field";
import PaginatedSearchResults from "../../components/PaginatedSearchResults";

const ResultPage = () => {
  const navigate = useNavigate();

  const { search } = useContext(searchContext);
  const { field } = useContext(fieldsContext);

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <span onClick={goBackHome}>
          <StyledFaArrowLeft />
          <h2>Fazer outra pesquisa</h2>
        </span>
      </Header>
      <UserField>
        <h4>Exibindo resultados para:</h4>
        {field &&
          Object.entries(field).map(([key, value]) => {
            if (
              key === "datas" &&
              typeof value === "object" &&
              value !== null
            ) {
              const { anoInicial, anoFinal } = value;
              return (
                <React.Fragment key={key}>
                  <div>
                    <span>Ano inicial: </span>
                    <strong>{anoInicial}</strong>
                  </div>
                  <div>
                    <span>Ano final: </span>
                    <strong>{anoFinal}</strong>
                  </div>
                </React.Fragment>
              );
            } else if (value !== "") {
              return (
                <div key={key}>
                  <span>{key}: </span>
                  {value && <strong>{String(value)}</strong>}
                </div>
              );
            }
            return null;
          })}
      </UserField>

      <PaginatedSearchResults searchData={search} />
    </Container>
  );
};

export default ResultPage;
