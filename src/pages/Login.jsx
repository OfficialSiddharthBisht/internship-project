import React from 'react'
import { Button, Card, Row, Col, InputGroup, FloatingLabel, Form, Container } from 'react-bootstrap';

function Login() {
  return (
    <div style={{backgroundColor:"black"}}>
      <Card className="text-center" style={{
       backgroundColor:'black',
       boxSizing:"border-box",
       alignItems:"center",
       border: "1px solid #404040", 
       background:"url('./static/background/bg-login-signup-png')",
       marginTop: "80px",
       minHeight: "400px",
       background: "linear-gradient(92.01deg, #42A04B 0%, #06AC70 100%)" }}>
        <Card.Body>
          <Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <img src="./static/icons/logo.png" alt="" width={"35px"} height={"30px"} />
                <span style={{ fontSize: "30px", color: "#FFFFFF" }}>Account</span>
              </span>
              <span style={{ color: "#FF7A49" }}>Sign Up</span>
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
          <Button variant="primary" style={{width:"100%"}}>Sign In</Button>
          <br />
          <small>Or sign in with</small>
          <Container>
            <Row>
              <Col>
                <img src="./static/icons/telegram3.png" alt="" width={"110px"}/>
              </Col>
              <Col>
                <img src="./static/icons/google.png" alt="" width={"110px"} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login