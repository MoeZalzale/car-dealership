import React from 'react'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <Header> 

                <HeaderWrap>
            <HeaderItem href= "/inventory">Inventory</HeaderItem>
            <HeaderItem href = "/contact">Contact</HeaderItem>
            <HeaderItem href ="about">About Us</HeaderItem>

            </HeaderWrap>
            </Header>

<Main>
<h1 className="first">Shop with confidence</h1>
<button> <a href ="/inventory">Shop Now</a></button>
</Main>



        </Container>
       
    )
}

const Header = styled.div`
background-color:transparent;
position: relative;
top:0;
//width:100vw;
`


const HeaderWrap = styled.div`
display:flex;
padding-top:20px;
justify-content: center;
align-items: center;
`


const HeaderItem = styled.a`
opacity:0%;
font-weight:600;
text-decoration: none;
margin-left: 100px;
font-size:25px;
color:whitesmoke;
animation: load 3s ease forwards;

&:hover {
    cursor: pointer;
}

@keyframes load{

0%{
    opacity:0%;
}
100% {
    opacity:100%;
}

}
`


const Main = styled.div`
height:80vh;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between;


& > h1 {
    background-color: transparent;
    color:whitesmoke;
    font-size: 80px;
    animation: start 2s ease forwards ;

    @keyframes start{
        0% {
            opacity: 0;
            transform: translateY(0px);
            
        }
        100%{
            transform: translateY(70px);
            opacity:100;
        }


    }
}


& > button{
    background-color: teal;
    border-radius: 100px;
    width: 200px;
    height:50px;
    border: 1px solid black;
    animation: animate-button 3s ease forwards;
   > a {
       text-decoration: none;
       color:whitesmoke;
       font-size: 1.2em;
   }

    @keyframes animate-button {
        0%{
            opacity: 0;
            transform: translateY(10px);
        }
        100%{
            opacity:80;
            transform: translateY(-20px);
        }
    }

&:hover{
    cursor: pointer;
    color:black;
    border: 2px solid black;
   
}

}

`




const Container = styled.div`
height:100vh;
width:100vw;
background-repeat:no-repeat;
background-position: center;
background-size: cover;
background-image: url("https://www.copilotsearch.com/uploads/00_used_car_lot-2ajwf7c.jpg");
`

export default Home
