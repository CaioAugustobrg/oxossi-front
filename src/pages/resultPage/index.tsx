import { useContext } from "react"
import { Container, Header, Results, StyledFaArrowLeft, UserField } from "./styles"
import searchContext from "../../context"
import { FormData } from "../../types"
import { useNavigate } from "react-router-dom"
import fieldsContext from "../../context/field"

const ResultPage = () => {
    const navigate = useNavigate();

    const {search} = useContext(searchContext)
    const {field} = useContext(fieldsContext)

    const goBackHome = () => {
        navigate('/')
    }
    return (
        <Container>
            <Header>
            <span onClick={goBackHome}>
            <StyledFaArrowLeft  />
                <h2>
                    Fazer outra pesquisa
                </h2>
            </span>
            </Header>
            <UserField>
            <h4>Exibindo buscas para:</h4>
      {field && Object.entries(field).map(([key, value]) => (
        value !== "" && (
          <div key={key}>
            <span>{key}: </span>
            <strong>{value}</strong>
          </div>
        )
      ))}
    </UserField>
        {search.map((item: FormData ,index: string | number) => (
            
            <Results key={index}>
                <span><h5>Título: </h5><h6>{item?.titulo}</h6></span>
                <span><h5>Autores: </h5><h6>{item?.autores}</h6></span>

                <span><h5>Capitania: </h5><h6>{item?.capitania}</h6></span>
                <span><h5>Lugares: </h5><h6> {item?.lugares ? item.lugares.replace(/[\\[\]']/g, '') : ''}</h6></span>
                <span><h5>Nomes: </h5><h6>{item?.nomes ? item.nomes.replace(/[\\[\]']/g, '') : ''}</h6></span>
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
    )

}
export default ResultPage