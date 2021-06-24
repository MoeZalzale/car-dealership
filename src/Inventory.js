import React, {useState, useEffect} from 'react'
import Header from './Header'
import styled from "styled-components"
import Car from './Car'
import db from './firebase'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Inventory() {

const [cars,updateCars] = useState([])
const [sortedCars,updateSortedCars]=useState([])
const [sortedPrice,updateSorted]=useState('none')
const [make,updateMake]=useState('All')
const [carMakes,updateList] = useState(['All'])


useEffect(()=>{
    db.collection('Cars').orderBy('id').onSnapshot(snapshot => updateCars(snapshot.docs.map(cars => cars.data())))
},[])

useEffect(()=>{
updateMakeList();
updateSortedCars(cars);
},[cars])

 useEffect(()=>{
     if (cars.length>0){
     sort();
 }
}
 ,[make,sortedPrice])


const updateMakeList = ()=>{

    const t = [...carMakes]
     cars.forEach(m =>{
         if (!t.includes(m.Make)){
             t.push(m.Make)
         }
     })
     updateList(t);

}


const sort = () =>{


if (make !== 'All'){
    updateSortedCars(cars.filter(car => car.Make===make).sort((a,b)=>{
        if (sortedPrice==='up'){
        if (a.Price>b.Price){return 1}
        if (a.Price<b.Price){return -1}
        return 0;
        }
        else if (sortedPrice==='down'){
            if (a.Price<b.Price){return 1}
            if (a.Price>b.Price){return -1}
            return 0;
        }

        }))
   
    
}

else{
    updateSortedCars(cars.map(car => car).sort((a,b)=>{
        if (sortedPrice==='up'){
        if (a.Price>b.Price){return 1}
        if (a.Price<b.Price){return -1}
        return 0;
        }
        else if (sortedPrice==='down'){
            if (a.Price<b.Price){return 1}
            if (a.Price>b.Price){return -1}
            return 0;
        }

        })

    )}

}



    return (

        <Container>
            <Header/>
        <Body>
       <Sidebar>


           <h2>Sort By:</h2>
            <ButtonWrap>
           <Button onClick={() => updateSorted('up')}> Price <ArrowDropUpIcon style ={{color:sortedPrice ==='up'? 'lime': ''} }/> </Button>
           <Button onClick={() => updateSorted('down')} > Price <ArrowDropDownIcon style ={{color:sortedPrice ==='down'? 'red': ''} }/> </Button>
           </ButtonWrap>

           <h2>Make:</h2>

           <ButtonWrap>
               {carMakes.map( makes => 
                <label>{makes} <input type='radio' checked = {make===makes} onChange={()=> updateMake(makes)}></input></label>
                )}
           
        
           </ButtonWrap>
       </Sidebar>
    
       
        <CarContainer>

        
                {sortedCars.map( car =>(
                   
                <Car 
                key = {car.id}
                id={car.id}
                Year={car.Year}
                Model={car.Model}
                Color={car.Color}
                Km={car.Km}
                Price={car.Price}
                Make={car.Make}
                Pic={car.Pic} 
                
                />
                ))} 
                
                
            </CarContainer>
            

        </Body> 
        
        </Container>
    )
}


const CarContainer = styled.div`
display:grid;
flex:0.9;
grid-gap:10px;
padding:10px;
grid-template-columns: repeat(3,1fr);
//background-color:blue;
grid-auto-rows: minmax(200px,300px);

 @media(max-width:768px){
    grid-template-columns: 1fr;
grid-auto-rows: 200px;




} 

`



const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
min-height:100vh;
//background-color: black;

@media (max-width:768px){
    justify-content:center;
}
`

const Body = styled.div`
display: flex;
//background-color:red;
flex:1;

`

const Sidebar = styled.div`
flex:0.1;
display: flex;
//height:100%;
flex-direction: column;
align-items: center;
background-color: var(--main-color);

&>h2{
    font-size: 2rem;
    @media (max-width:768px){
        font-size: 1.5rem;
    }
}



`

const Button = styled.button`
display:flex;
align-items: center;
padding:0 20px;


`

const ButtonWrap = styled.div`
display:flex;
flex-direction: column;
padding:20px;
align-items: flex-start;
justify-content: space-evenly;

& > label{
font-size: 1.4rem;
padding:10px;


}
`

export default Inventory
