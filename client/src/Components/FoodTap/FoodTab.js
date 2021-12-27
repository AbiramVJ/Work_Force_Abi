import React from 'react'
import { useState } from 'react'
import {AiOutlineFilter } from 'react-icons/ai';
import { Container, Col, Row, Form,Button, Image} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from '../Home/Home';


function FoodTap() {
    const [allType] = useState([
        {
            id:"home",
            ImageNonactive:"Home.png",
            ImageActive:"location2.png",
            name:"HOME",
            activeColor:"blue"
        },
        {
        id:"Loaction",
        ImageNonactive:"location1.png",
        ImageActive:"location2.png",
        name:"LOCATION",
        activeColor:"blue"
    },
    {
        id:"Category",
        ImageNonactive:"category2.png",
        ImageActive:"location1.png",   
        name:"CATEGORY",
        activeColor:"blue"
    },

])
//const {type} = useParams();
//console.log({type});
    return (
        <>
        
        <Container className='d-flex' >
            <Row className="bg-white p-2 m-2" >
                {allType.map((item)=>(
                    <Col className='m-3 text-center  img-fluid'>                                         
                  <a href={item.id}> <img src={item.ImageNonactive} alt={item.id} style={{height:"70px", width:"70px"}} />  </a>                                                   
                    <h6 className='font-weight-bold' >{item.name}</h6>
                   
                    </Col>

                ))}
              
            </Row>

        </Container>
       
        
            
        </>
    )
}

export default FoodTap;
