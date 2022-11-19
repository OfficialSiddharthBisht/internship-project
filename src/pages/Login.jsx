import React from 'react'
import { Button, Card, Row, Col, InputGroup, FloatingLabel, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="text-center border-0" style={{
        backgroundColor: '#0F0F0F',
        boxSizing: "border-box",
        alignItems: "center",
        border: "1px solid #404040",
        marginTop: "80px",
        minHeight: "380px",
      }}>
        <Card.Body>
          <Card.Text>
            <div>
              <span style={{ display: "flex", alignContent: "space-between", minWidth: "400px", padding: "25px" }}>
                <img src="./static/icons/loginimg.png" alt="" width={"180px"} />
                <span style={{ color: "#FF7A49" }}>Sign Up</span>
              </span>
            </div>
            <br />
            <Col>
              <InputGroup size="sm" className="mb-2">
                <img src="./static/icons/email.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-2"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="text" placeholder="Email" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup size="sm" className="mb-2">
                <img src="./static/icons/password.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-2"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="password" placeholder="Password" />
                </FloatingLabel>
              </InputGroup>
            </Col>
          </Card.Text>
          <Button variant="primary" style={{ width: "90%" }} onClick={() => {
            navigate("/")
          }} >Sign In</Button>
          <br />
          <small>Or sign in with</small>
          <Container>
            <Row>
              <Col>
                <img src="./static/icons/telegram3.png" alt="" width={"120px"} />
              </Col>
              <Col>
                <img src="./static/icons/google.png" alt="" width={"120px"} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login