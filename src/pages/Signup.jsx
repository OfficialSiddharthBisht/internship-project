import React from 'react'
import {Button, Card, Row, Col, InputGroup, FloatingLabel,Form,Container} from 'react-bootstrap';

function Signup() {
  return (
    <>
      <Card className="text-center" style={{ width: "50%", margin: "auto", backgroundColor: "#404040", marginTop: "140px", minHeight: "400px",background: "linear-gradient(92.01deg, #42A04B 0%, #06AC70 100%)" }}>
        <Card.Body>
          <Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <img src="./static/icons/logo.png" alt="" width={"40px"} height={"40px"} />
                <span style={{ fontSize: "40px", color: "#FFFFFF" }}>New Account</span>
              </span>
              <span><h6 style={{color: "#FF7A49"}}>Sign In</h6></span>
            </div>
            <br />
            <Col>
              <InputGroup size="sm" className="mb-3">
                <img src="./static/icons/username.png" alt="" width={"55px"} height={"55px"} style={{ margin: "8px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="text" placeholder="Username" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup size="sm" className="mb-3">
                <img src="./static/icons/email.png" alt="" width={"55px"} height={"55px"} style={{ margin: "8px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="email" placeholder="Email" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup size="sm" className="mb-3">
                <img src="./static/icons/password.png" alt="" width={"55px"} height={"55px"} style={{ margin: "8px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="password" placeholder="Password" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup size="sm" className="mb-3">
                <img src="./static/icons/password.png" alt="" width={"55px"} height={"55px"} style={{ margin: "8px" }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Repeat Password"
                  className="mb-3"
                >
                  <Form.Control aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type="password" placeholder="Repeat Password" />
                </FloatingLabel>
              </InputGroup>
            </Col>
          </Card.Text>
          <Button variant="primary">Create An Account</Button>
          <br />
          <small>Or sign up with</small>
          <Container>
            <Row>
              <Col>
                <img src="./static/icons/telegram3.png" alt="" />
              </Col>
              <Col>
                <img src="./static/icons/google.png" alt="" />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}

export default Signup;