import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function _404() {
  return (
    <div style={{ backgroundColor: "#414141", color: "#FFFFFF", height: "100vh" }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Row>
            <Col>
              <img src="./static/icons/logo.png" alt="" width={"50px"} height={"50px"} />
              <h3>LABELFALCON </h3>
            </Col>
          </Row>
          <br />
          <img src="./static/icons/404.png" alt="404" />
          <h3>Oops... Page Not Found</h3>
          <p>Maybe we have broken this page.<br />Come back to the homepage</p>
          <Button style={{ background: "#E65425" }}>← Back To Homepage</Button>{' '}
        </Col>
      </Row>
    </div>
  )
}

export default _404;