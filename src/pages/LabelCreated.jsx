import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LabelCreated() {
    const navigate = useNavigate();
    return (
        <div className="text-center" style={{ height: "80vh", width: "75vh", overflow: "hidden", justifyContent: "center", margin: "auto" }}>
            <Card style={{ border: "none" }}>
                <Card.Body style={{ backgroundColor: "#282828" }}>
                    <Card.Text>
                        <img src="./static/icons/labelCreated.png" alt="" />
                        <div>
                            <Row style={{ display: "flex", alignContent: "flex-start" }}>
                                <Col>
                                    <p>Tracking Number</p>
                                    <h4>845-3421-31</h4>
                                </Col>

                                <Col>2</Col>
                            </Row>
                            <h3>Oops... Page Not Found</h3>
                            <br />
                            <p>Maybe we have broken this page.<br />Come back to the homepage</p>
                        </div>
                        <Button style={{ color: "#FFFFFF", fontWeight: "bold" }}>← Back To Homepage</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <br />
            <Row>
                <Button variant="dark" style={{ border: "1px dashed #E65425", color: "#E65425", width: "100%" }} onClick={() => { navigate("/newlabel") }}>+ Create Another Label</Button>{' '}
            </Row>
        </div>
    )
}

export default LabelCreated