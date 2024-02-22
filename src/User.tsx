import { Button, Card, Col, ConfigProvider, Form, Input, Row } from "antd";
import "./User.css";
import Logo from "./assets/Imgs/LOGO_Slogan.png";
import { LeftOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="recover">
      <a href="">Solicitar cambio de contraseña</a>
      <div className="recard">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          style={{ justifyContent: "center" }}
        >
          <Form.Item>
            <p>
              Ingrese el nombre del usuario que tiene registrado en la
              plataforma
            </p>
            <Input
              placeholder=" Usuario"
              style={{
                width: 419.39,
                height: 34.95,
                marginTop: 23,
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              style={{
                background: "#82C700",
                width: 419.39,
                height: 34.95,
                color: "white",
                marginTop: 53,
              }}
              htmlType="submit"
            >
              Solicitar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const LoginCard = () => {
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
            style={{
              fontSize: "32px",
              color: "#E4E2E2",
              marginTop: "17px",
              marginLeft: "52.32px",
            }}
          />
          Notifications
        </span>

        <Row>
          <Col span={12}>
            <div className="coin">
              <img src={Logo} alt="logo" />
            </div>
          </Col>
          <Col span={12}>
            <LoginForm />
          </Col>
        </Row>
      </Card>
    </ConfigProvider>
  );
};

const App = () => {
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

export default App;
