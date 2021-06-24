import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header';
import db from './firebase'
function Carinfo() {
    const {id }= useParams();

const [car,updateInfo]= useState({});

useEffect (() =>
db.collection("Cars").where('id','==',id).onSnapshot(snapshot => updateInfo(snapshot.docs[0].data()))

,[])



    
    return (
        <Container>
            <Header />


            <Body>
            

            <h2>{car.Price}</h2>   
            <Info>
             
            <img src={car.Pic}></img>


            <Right>
            <Basic>
            <span>Make: {car.Make}</span>
            <span>Model: {car.Model}</span>
            <span>Color: {car.Color}</span>
            <span>Year: {car.Year}</span>
            <span>Kilometers: {car.Km}</span>
            </Basic>

            <Description> <p>dfdsfdsfsdfsdfsdfsdfsd</p></Description>
            </Right>
            </Info>

            </Body>
        

        </Container>
    )
}


const Container = styled.div`
display:flex;
flex-direction: column;
width: 100vw;
height:100vh;

`

const Body = styled.div`
display: flex;
flex-direction: column;
height:100%;
width:100%;
align-items: flex-start;
justify-content:center;

& > h2 {
    margin-left: 30px;
    padding-bottom:10px;

    @media (max-width:768px){
        text-align: center;
    }

}

`


const Info = styled.div`
display:flex;
padding:0 10px;
align-items:center;
max-height:90%;
max-height:100%;
max-width:100%;

& > img{
    border-radius:20px;
    max-width:70%;
    max-height:100%;

    @media (max-width:768px){
        max-width:90%;
    }
}

@media (max-width:768px){
    flex-direction:column;
}


`

const Right = styled.div`
display:flex;
flex-direction:column;
height:100%;

`

const Basic = styled.div`
padding:10px;
display:flex;
flex-wrap:wrap;
min-height:50%;
flex:1;
justify-content: space-around;
align-items:center;
background-color:rgb(235, 235, 250);
border-radius: 20px;
border: 2px solid black;
border-left:hidden;
& > span{
    font-size: 1.4vw;
padding-left: 30px;
font-weight: 400;

}
`

const Description = styled(Basic)`
border-top:hidden;

`


export default Carinfo

