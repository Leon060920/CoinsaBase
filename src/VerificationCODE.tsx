import { useState } from "react";
import { Button, Card, Col, ConfigProvider, Row } from "antd";
import "./VerifactionCODE.css";
import Logo from "./assets/Imgs/LOGO_Slogan.png";
import { LeftOutlined } from "@ant-design/icons";
import VerificationInput from "react-verification-input";

const LoginCard = () => {
  const [veriCode, setVeriCode] = useState("");
  const veriCodeInput = (value: any) => {
    setVeriCode(value);
  };

  const veriCodeButton = () => {
    console.log("Código de verificación:", veriCode);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            paddingLG: 0,
          },
        },
      }}
    >
      <Card
        style={{
          width: 1111.76,
          height: 499.17,
          borderRadius: 24,
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          padding: "0px",
        }}
      >
        <span style={{ fontSize: "18px", color: "#E4E2E2" }}>
          <LeftOutlined
          href="/"
            style={{
              fontSize: "32px",
              color: "#E4E2E2",
              marginTop: "17px",
              marginLeft: "52.32px",
            }}
          />
          Regresar
        </span>

        <Row>
          <Col span={12}>
            <div className="coin">
              <img src={Logo} alt="logo" />
            </div>
          </Col>
          <Col span={12}>
            <div className="recov">
              <a href="">Verificar cuenta</a>
              <div className="code">
                <p>Favor de ingresar los 6 dígitos enviados a su correo</p>
                <VerificationInput
                  onChange={veriCodeInput}
                  placeholder=" "
                  classNames={{
                    container: "container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                    characterFilled: "character--filled",
                  }}
                />
                
                <a style={{color: "#82c700", textAlign: "center", marginTop:"43px"}}>Reenviar codigo</a>


                <Button
                  type="primary"
                  onClick={veriCodeButton}
                  style={{
                    background: "#82C700",
                    width: 419.39,
                    height: 34.95,
                    color: "white",
                    marginTop: 33,
                  }}
                  htmlType="submit"
                >
                  Verificar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </ConfigProvider>
  );
};

const VerificationCODE = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoginCard />
      </div>
    </>
  );
};

export default VerificationCODE;
