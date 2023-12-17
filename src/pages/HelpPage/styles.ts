import styled from "styled-components";

export const InformativeText = styled.span`
width: 35%;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
display: flex;
    text-align: justify;
text-align: center;
justify-content: center;
color: #000;
p {
    text-align: justify;
    a {
        text-decoration: underline;
    }
}
`

export const Container = styled.div`
box-sizing: border-box;
display: flex;
width: 100%;
overflow-x: hidden;
flex-direction: column;
justify-content: space-between;
padding: 40px;
/* max-width: 1550px; */
margin: 0 auto;
min-height: 100%;
//padding: 0px 250px;
`

export const Title = styled.h2`
  align-items: center;
  text-align: center;
  width: auto;
  margin-bottom: 35px;
  @media(max-width: 768px) {
          margin-left: 0;
          padding: 10;
}
`