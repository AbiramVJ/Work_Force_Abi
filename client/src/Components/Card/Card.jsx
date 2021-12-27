import React from 'react';
import { Container, Col, Row, Form,Button, Image} from "react-bootstrap";

function Card() {
    
    return (
        <>
        <Col className="col-6 border mt-2 h-50">
          <div class="card mb-3 ">
            <Row className=' mt-2 w-25 p-2 text-align-center'>
              <Col className="d-flex justify-content-start">           
                <Image
                    className="rounded-circle d-inline-block p-1 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
                    alt="profile"
                    style={{height:"65px",width:"65px"}}
                  />  
                          
                          <Col>
                              <Col className='pl-1'>
                               <h4>Abiram</h4>  
                              </Col>
                              <Col className='pl-1'><h6> Electrician</h6></Col>
                             
                           </Col>
                </Col>
                   
                    
            </Row>
            
            <img
              src="https://wallpaperaccess.com/full/3113312.jpg"
              class="card-img-top"
              alt="Wild Landscape"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </Col>

        <Col className="border">asfsaf</Col> 
            
        </>
    )
}

export default Card
