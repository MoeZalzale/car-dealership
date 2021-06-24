import React, {forwardRef} from 'react'
import styled from 'styled-components'


const Car = 
    ({id,Price,Pic,Make,Model,Year,Km,Color}) => {
    return (
     
    <Container href={'/inventory/carinfo/'+id}>
        <img src={Pic}>

        </img>
            <InfoContainer>
            <h2>{Price}</h2>
        <Info>
        
        <span>{Make}</span>
        <span>{Model}</span>
        <span>{Year}</span>
        </Info>
        <Info2>
        <span>{Km}</span>
        <span>{Color}</span>



        </Info2>
      
        </InfoContainer>

        
        
    </Container>
   
    )
}


const Container = styled.a`
position:relative;
display: flex;
//justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 20px;
justify-content:flex-start;
cursor:pointer;
border: solid 2px black;
max-height:100%;


& > img{
   // position:relative;
   width:100%;
   height:100%;
   //object-fit:cover;
    border-radius:inherit;
}


`

const InfoContainer =styled(Container)`
position:absolute;
justify-content: space-around;
width: 100%;
height:100%;
flex:1;
opacity:0.7;
background-color: #afa9a9;
align-self:stretch;
margin-top:0;
opacity:0;
visibility:hidden;
transition: visibility 0s, opacity 0.2s linear;

${Container}:hover & {
    visibility:visible;
    opacity:0.8;
}

& > h2 {
    font-size: 3rem;
}


`


const Info = styled.div`
border-top:3px solid black;
display: flex;
align-self:stretch;
justify-content: space-around;
flex-wrap: wrap;
padding: 6px 20px 15px 20px;

& > span {
    font-size:1.5rem;

    @media(max-width:768px){
        font-size: 1rem;
    }
}

 




`


const Info2 = styled(Info)`
padding-bottom:10px;
border-top:none;

`
export default Car
