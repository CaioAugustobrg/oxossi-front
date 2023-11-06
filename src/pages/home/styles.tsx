import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
display: flex;
width: 100%;
overflow-x: hidden;
flex-direction: column;
justify-content: space-between;
/* max-width: 1550px; */
margin: 0 auto;
min-height: 100%;
padding: 0px 250px;
div.input-container {
    width: 100%;    
    margin-top: 16px;
  }

  /* button.btn-default {
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 45px;
    font-weight: bold;
    border-radius: 8px;
    font-size: 18px;
    padding: 24px;
  }   */

  form {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

    input {
        background-color: #7e593b;
      color: #000;
      width: 100%;
      height: 45px;
      border-radius: 8px;
      border: 2px solid #000;
      font-size: 14px;
      padding: 24px;      
    }
    button {      
      border-radius: 8px;
      margin-top: 24px;
      cursor: pointer;
      font-size: 18px;
      align-items: center;
      display: flex;
      color: #fff;
      height: 45px;
      background-color: #050504;
      justify-content: center;
      height: 45px;
      width: 100%;
      i {
        padding-right: 3%;
        align-items: center;
        font-size: 25px;
        justify-content: center;
        display: flex;
      }
    }
    h4 {
      font-size: 22px;
    }
  }
@media(max-width: 768px) {
    padding: 0;
  }
`

export const Results = styled.div`
    width: 100%;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 5px;
    margin: 5px;
    text-align: justify;
    text-transform: capitalize;
    span {
        display: flex;
        h5 {
            padding-right: 8px;
        }
        h6 {
            font-weight: 500;
        }
        
    }
`