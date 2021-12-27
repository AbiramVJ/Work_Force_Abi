import React from "react";
import { BsSearch } from "react-icons/bs";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import FoodTap from "../FoodTap/FoodTab";

function Nave() {
  return (
    <>
      <Container className="w-auto p-10 ">
        <Row className=" bg-red shadow-sm p-3 bg-white rounded h-25 py-10">
          <Col className=" p-3">
            <Row>
              <Col>
                <a href="/home">
                  <img
                    src="logo.gif "
                    alt="LOGO"
                    className="d-block w-50 d-sm-none d-md-block"
                  />
                </a>
                <a herf="/home">
                  {" "}
                  <h5 className="d-xl-none d-md-none">WORK FORCE</h5>
                </a>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col className="d-none d-lg-block">
              <div className="input-group rounded align-item-center p-2 ">
                
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                {/* <span class="input-group-text border-0" id="search-addon">
                <BsSearch  size = '20px'/>
                </span> */}
                <button type="button" className=" bg-red mt-0" style={{background:"white", border:"white"}}>
                <BsSearch  size = '40px'/>
                </button>
              </div>
            </Col>
          </Col>
          <Col className="gap-3">
            <div className="d-flex flex-row-reverse gap-2">
              <div>
                <Button variant="btn btn-danger" type="submit">
                  LOGIN
                </Button>
              </div>
              <div>
                <Button variant="btn btn-danger" type="submit">
                  SIGHUP
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <FoodTap />
      </div>
    </>
  );
}

export default Nave;
