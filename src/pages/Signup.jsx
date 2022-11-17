import React from 'react'
import {Button, Card, Row, Col, InputGroup, FloatingLabel,Form,Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Card className="text-center border-0" style={{
       backgroundColor:'#0F0F0F',
       boxSizing:"border-box",
       alignItems:"center",
       border: "1px solid #404040", 
       marginTop: "80px",
       minHeight: "400px",
       }}>
        <Card.Body>
          <Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <img src="./static/icons/logo.png" alt="" width={"34px"} height={"34px"} />
                <span style={{ fontSize: "28px", color: "#FFFFFF" }}>New Account</span>
              </span>
              <span style={{color: "#FF7A49"}}>Sign In</span>
            </div>
            <br />
            <Col>
              <InputGroup size="sm" className="mb-3">
                <img src="./static/icons/username.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
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
                <img src="./static/icons/email.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
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
                <img src="./static/icons/password.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
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
                <img src="./static/icons/password.png" alt="" width={"45px"} height={"45px"} style={{ margin: "7px" }} />
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
          <Button variant="primary"  style={{width:"100%"}}
            onClick={()=>{
              navigate("/login")
            }}
          >Create An Account</Button>
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