import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function ConfirmLogout() {
    const navigate = useNavigate();
    return (
        <Card className="text-center border-0" style={{ border: "none", height: "45vh",justifyContent:"center",width:"auto"}}>
            <Card.Body style={{ backgroundColor: "#0F0F0F" }}>
                <Card.Text>
                    <div>
                        <img src="./static/icons/cry.png" alt="404" />
                        <h5>Oh no! You're leaving...  <br /> Are you sure</h5>
                        <br />
                        <p>Maybe we have broken this page.<br />Come back to the homepage</p>
                    </div>
                    <Row>
                        <Col style={{ marginLeft: "35%" }}>
                            <Button 
                                style={{ background: "#E65425" }}
                                className='border-0'
                                onClick={()=>{
                                    navigate("/login");
                                }}
                                >
                                Logout
                                </Button>
                        </Col>
                        <Col style={{ borderRadius: "5px",marginRight:"35%" }}>
                            <Button variant="light">Cancel</Button>{' '}
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ConfirmLogout