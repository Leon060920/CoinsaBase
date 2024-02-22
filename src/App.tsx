import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  ConfigProvider,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./App.css";
import Log_Coin from "./assets/Imgs/Log_Coin.png";
import Logo from "./assets/Imgs/Logo.png";

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="cardi">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <div className="mage">
          <img src={Logo} alt="logo" />
        </div>
        <br />
        <br />
        <p>Usuario</p>
        <Form.Item name="username">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder=" Usuario"
          />
        </Form.Item>
        <p>Contraseña</p>
        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder=" Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordar Contraseña</Checkbox>
          </Form.Item>

          <a href="">¿Olvidaste tu Contraseña?</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            style={{
              background: "#82C700",
              width: 550,
              height: 35,
              color: "black",
            }}
            htmlType="submit"
          >
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>
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
          width: 1262.63,
          height: 707.25,
          borderRadius: 24,
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          padding: "0px",
        }}
      >
        <Row>
          <Col span={12}>
            <div className="cover">
              <img src={Log_Coin} alt="logo" />
              <div className="title">
                <h1>Analytics</h1>
              </div>
              <div className="subtitle">
                <p>"Control preciso, gestión inteligente,</p>
                <p>Tu aliado en mediciones que importan."</p>
              </div>
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
