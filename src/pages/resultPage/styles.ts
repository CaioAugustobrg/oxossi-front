import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

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

//padding: 0px 250px;
`

export const Results = styled.div`
    width: 70%;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 0 5px;
    margin: 10px auto;
    text-align: justify;
    text-transform: capitalize;
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
        border-color: #808080; 
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.3); 
    }

    span {
        font-size: 18px;
        display: flex;

        h5 {
            padding-right: 8px;
        }

        h6 {
            font-weight: 500;
            margin-bottom: 2px;
        }
    }

    @media (max-width: 768px) {
        width: 95%;

        span {
            flex-direction: column;
            margin-bottom: 0;
        }

        h5 {
            flex-direction: column;
            margin-bottom: 0;
        }
    }
`;
export const ModalResults = styled.div`
    width: 70%;
    border-radius: 8px;
    padding: 0 5px;
   // margin:  10px auto;
    text-align: justify;
    text-transform: capitalize;
    span {
        font-size: 18px;
        @media(max-width: 768px) {
         flex-direction: column;
}
        display: flex;
        h5 {
            margin-bottom: 2px;
            padding-right: 8px;
            @media(max-width: 768px) {
         flex-direction: column;
         margin-bottom: 0;

}
        }
        h6 {
            font-weight: 500;
            margin-bottom: 2px;
            @media(max-width: 768px) {
         flex-direction: column;
         margin-bottom: 0;

}

         

            
        }
        
    }
    @media(max-width: 768px) {
         width: 95%;
         
}
`

export const Header = styled.header`
width: 100%;
height: 60px;

span {
    color: #000;
    align-items: center;
    display: flex;
    height: auto;
    text-align: justify;
    margin: auto;
    h2 {
        cursor: pointer;
        &:hover {
            color: gray
        }
    }
}`

export const StyledFaArrowLeft = styled(FaArrowLeft)`
font-size: 25px;
margin: 15px;
cursor: pointer;
&:hover {
            color: gray
        }
`

export const UserField = styled.div`
width: auto;
height: auto;
min-width: 200px;
min-height: 200;
margin: auto;
padding: 5px;
align-items: center;
text-align: left;
border: 2px solid #000;
border-radius: 8px;

 h4 {
    //text-align: center;
 }
`