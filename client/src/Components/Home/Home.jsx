import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { FcBusinessman,FcDataConfiguration,FcLibrary,FcVoicePresentation,FcUpload} from "react-icons/fc";

//componet
// componets
import Card from '../Card/Card';

  function HomepageLg({fullName,profile}) {

    return(
    <div className="m-2 p-2  bg-gradient text-dark d-none d-lg-block">
      <Row className="m-10 p-10 bg-light   ">
        <Col className="border d-flex p-25 d-flex text-center bg-white ">
          <Row className="d-flex flex-column p-10 ">
            <div
              className="list-group bg-light bg-gradient text-dark p-0 d-none d-lg-block "
              id="list-tab"
              role="tablist"
            >
              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-home-list"
                data-mdb-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              >
                <Col className="p-2 m-10 w-50 align-content-center  ">
                  <Image
                    className="rounded-circle w-25 d-inline-block"
                    src={profile}
                    alt={fullName}
                  />
                  <h6 className="fw-bold "> {fullName}</h6>
                </Col>
              </a>

              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-home-list"
                data-mdb-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              >
                <span>
                <i><FcLibrary size="25px"/></i>
                </span>
                <div className="p-1 ">
                  <h6 className="fw-bold">HOME</h6>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-profile-list"
                data-mdb-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
                {" "}
                <span>
                  <i><FcBusinessman size="25px"/></i>
                </span>
                <div className="p-1 ">
                  <h6 className="fw-bold">Profile</h6>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-messages-list"
                data-mdb-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                <span>
                <i><FcVoicePresentation size="25px"/></i>{" "}
                </span>
                <div className="p-1 ">
                  <h6 className="fw-bold">Chats</h6>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-settings-list"
                data-mdb-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                <span>
                  {" "}
                  <i><FcDataConfiguration size="25px"/></i>
                </span>
                <div className="p-1">
                  <h6 className="fw-bold">Setting</h6>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action  border-0 d-flex justify-content-start"
                id="list-settings-list"
                data-mdb-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                <span>
                <i><FcUpload size="25px"/></i>
                </span>
                <div className="p-1 ">
                  <h6 className="fw-bold">logout</h6>
                </div>
              </a>
            </div>
          </Row>
        </Col>

        {/* cards */}      
        <Card/>     
      </Row>
    </div>
    )
  }

function Home() {
    const [user] = useState([{
        fullName: "abiram Vj",
        profile:"https://scontent.fcmb9-1.fna.fbcdn.net/v/t1.6435-9/175711812_3870322719722322_6390259897220585638_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2eks8-MrOKMAX_QrN-M&_nc_ht=scontent.fcmb9-1.fna&oh=00_AT-cZ-NMcwMqxmLSS3FVELqbOWYoJP3D7ETGTVMV17tfhg&oe=61EE9B37",
      }]);

   
  
  return (
  <>
      {user.map((user) => (
        <HomepageLg {...user} />))}
       
  </>
  )
}

export default Home;
