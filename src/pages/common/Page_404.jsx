import React from 'react'
import { Button, Card } from 'react-bootstrap';
function _404() {
  return (
    <Card className="text-center" style={{ border: "none", height: "100vh" }}>
      <Card.Body style={{ backgroundColor: "#0F0F0F" }}>
        <Card.Text>
          <img src="./static/icons/logo.png" alt="" width={"40px"} height={"40px"} />
          <span style={{ fontSize: "40px" }}>LABELFALCON</span>
          <div>
            <img src="./static/icons/404.png" alt="404" />
            <h3>Oops... Page Not Found</h3>
            <br />
            <p>Maybe we have broken this page.<br />Come back to the homepage</p>
          </div>
          <Button style={{ color: "#FFFFFF", fontWeight: "bold" }}>← Back To Homepage</Button>{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default _404;