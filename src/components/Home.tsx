import "./Home.css";
import Nav from "./Nav";
import { Card } from "antd";
import users from "../assets/Icons/users-03.svg";
import chip from "../assets/Icons/cpu-chip-01.svg";
import building from "../assets/Icons/building-07.svg";
import tool from "../assets/Icons/tool-02.svg";
import bulb from "../assets/Icons/u_lightbulb-alt.svg";
import { Col, Row } from "antd";

const Homee = () => {
  function showAlertMessage() {
    alert("Taraaa");
  }

  return (
    <div className="home">
      <Nav/>
        <div className="middle">
        <div className="hello">
          <h1>Bienvenido(a) </h1>
        </div>
        <div className="cardcontainer">
          <div className="cards">
            <Card
              style={{
                width: 390.94,
                height: 125.36,
                marginLeft: 43,
                marginTop: 34,
              }}
              hoverable
              onClick={showAlertMessage}
            >
              <Row>
                <Col span={3}>
                  <img src={users} />
                </Col>
                <Col span={3} offset={1}>
                  <h3>Colaboradores</h3>
                </Col>
              </Row>
              <p>Catálogo de colaboradores de Coinsamatik</p>
            </Card>
            <Card
              style={{
                width: 390.94,
                height: 125.36,
                marginLeft: 43,
                marginTop: 34,
              }}
              hoverable
            >
              <Row>
                <Col span={3}>
                  <img src={building} />
                </Col>
                <Col span={3} offset={1}>
                  <h3>Clientes</h3>
                </Col>
              </Row>
              <p>Catálogo de clientes</p>
            </Card>
            <Card
              style={{
                width: 390.94,
                height: 125.36,
                marginLeft: 43,
                marginTop: 34,
              }}
              hoverable
            >
              <Row>
                <Col span={3}>
                  <img src={chip} />
                </Col>
                <Col span={3} offset={1}>
                  <h3>Medidores</h3>
                </Col>
              </Row>
              <p>Visualizador de equipos y la información de sus pozos</p>
            </Card>
          </div>
          <div className="item3">
            <Card
              style={{
                width: 390.94,
                height: 125.36,
                marginLeft: 43,
                marginTop: 34,
              }}
              hoverable
            >
              <Row>
                <Col span={3}>
                  <img src={tool} />
                </Col>
                <Col span={3} offset={1}>
                  <h3>Clientes</h3>
                </Col>
              </Row>
              <p>Lista de reportes de incidencias</p>
            </Card>
            <Card
              style={{
                width: 390.94,
                height: 125.36,
                marginLeft: 43,
                marginTop: 34,
              }}
              hoverable
            >
              <Row>
                <Col span={3}>
                  <img src={bulb} />
                </Col>
                <Col span={3} offset={1}>
                  <h3>Clientes</h3>
                </Col>
              </Row>
              <p>Catálogo de nuevos productos y servicios</p>
            </Card>
          </div>
        </div>
        </div>
      </div>
    
  );
};

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Homee />
      </div>
    </>
  );
};
export default Home;
