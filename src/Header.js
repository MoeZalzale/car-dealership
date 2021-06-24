import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
            <HeaderBar>
        <ItemWrap>

            <Item href ="/inventory"> Inventory</Item>
            <Item href ="/about"> About Us</Item>
            <Item href = "/contact"> Contact </Item>
        </ItemWrap>


            </HeaderBar>
        </div>
    )
}

const HeaderBar = styled.div`
position: relative;
flex:0.1;
top: 0;
width:100vw;
background-color: var(--main-color);
z-index:100;
`

const ItemWrap = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right:30px;

@media (max-width:768px){
    justify-content: center;
}
`

const Item = styled.a`
text-decoration: none;
border-radius: 5px;
font-size: 30px;
font-weight: 700;
color:black;
margin:30px;

&:hover{
    cursor: pointer;

}





`


export default Header

