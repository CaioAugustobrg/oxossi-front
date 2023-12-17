/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { type FormData } from "../../types";
import { Results } from "../../pages/resultPage/styles";
const ItemsPerPage = 8;

const PaginatedSearchResults: React.FC<{ searchData: any[] }> = ({ searchData }) => {
  const [currentlyPage, setCurrently] = useState(1);
  const indiceInicial = (currentlyPage - 1) * ItemsPerPage;
  const indiceFinal = currentlyPage * ItemsPerPage;
  const itensDaPagina = searchData.slice(indiceInicial, indiceFinal);

  const onChangePage = (pagina: number) => {
    setCurrently(pagina);
  };
  useEffect(() => {
    window.scrollTo({ top: 295, behavior: "instant" });
  }, [currentlyPage]);
  return (
    <div>
      {itensDaPagina.map((item: FormData, index: number) => (
        <Results key={index}>
          <span>
            <h5>Título: </h5>
            <h6>{item?.titulo}</h6>
          </span>
          <span>
            <h5>Autores: </h5>
            <h6>{item?.autores}</h6>
          </span>
          <span>
            <h5>Capitania: </h5>
            <h6>{item?.capitania}</h6>
          </span>
          <span>
            <h5>Lugares: </h5>
            <h6>
              {item?.lugares ? item.lugares.replace(/[\\[\]']/g, "") : ""}
            </h6>
          </span>
          <span>
            <h5>Nomes: </h5>
            <h6>{item?.nomes ? item.nomes.replace(/[\\[\]']/g, "") : ""}</h6>
          </span>
          <span>
            <h5>Temas: </h5>
            <h6>{item?.temas}</h6>
          </span>
          <span>
            <h5>Distribuição dos temas:</h5>
            <h6>{item?.temaPercent}</h6>
          </span>
          <span>
            <h5>Período:</h5>
            <h6>
              {item?.AnoI} - {item?.AnoF}
            </h6>
          </span>
          <span>
            <h5>Ano de publicação:</h5>
            <h6>{item?.anoPub}</h6>
          </span>
          <span>
            <h5>Fonte:</h5>
            <h6>{item?.fonte}</h6>
          </span>
          <span>
            <h5>Temáticas:</h5>
            <h6>{item?.tematicas?.replace(/[\\[\]']/g, "")}</h6>
          </span>

          <span>
            <h5>Link: </h5>
            <h6>
              {item?.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              ) : (
                ""
              )}
            </h6>
          </span>
          <span></span>
        </Results>
      ))}
      <Pagination
        defaultCurrent={1}
        total={searchData.length}
        pageSize={ItemsPerPage}
        current={currentlyPage}
        onChange={onChangePage}
        style={{ marginTop: "20px", marginLeft: "20px" }}
      />
    </div>
  );
};

export default PaginatedSearchResults;
