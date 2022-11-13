import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function NewLabel() {
    const [senderReceiverInfo, setSenderReceiverInfo] = useState([
        "Name", "Phone", "Address line 1", "Address line 2", "Address line 3", "City", "ZIP", "State"
    ])
    const [generalDataMetric, setGeneralDataMetric] = useState([
        {
            metric: "Weight",
            placeholder: "0.00 lbs",
        },
        {
            metric: "Length",
            placeholder: "0.00 inch",
        },
        {
            metric: "Width",
            placeholder: "0.00 inch",
        },
        {
            metric: "Height",
            placeholder: "0.00 inch",
        },
    ])
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>① Sender</Card.Title>
                                <Card.Text>
                                    {
                                        senderReceiverInfo.map((el, index) => {
                                            return (
                                                <Col>
                                                    <InputGroup size="sm" className="mb-3">
                                                        <Form.Control aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            type="text" placeholder={el} />
                                                    </InputGroup>
                                                </Col>
                                            )
                                        })
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>② Recipient</Card.Title>
                                <Card.Text>
                                    {
                                        senderReceiverInfo.map((el, index) => {
                                            return (
                                                <Col>
                                                    <InputGroup size="sm" className="mb-3">
                                                        <Form.Control aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            type="text" placeholder={el} />
                                                    </InputGroup>
                                                </Col>
                                            )
                                        })
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>③General Data</Card.Title>
                                <Card.Text>
                                    <Col>
                                        <Form.Select aria-label="Default select example">
                                            <option>Provider</option>
                                            <option value="1">UPS</option>
                                            <option value="2">APS</option>
                                            <option value="3">TPS</option>
                                        </Form.Select>
                                    </Col>
                                    <br />
                                    <Col>
                                        <Form.Select aria-label="Default select example">
                                            <option>Shipping Speed</option>
                                            <option value="1">Immediate</option>
                                            <option value="2">Can Wait</option>
                                            <option value="3">Economic</option>
                                        </Form.Select>
                                    </Col>
                                    <br />
                                    {
                                        generalDataMetric.map((el, index) => {
                                            return (
                                                <Col>
                                                    <Form.Label htmlFor="basic-url">{el.metric}</Form.Label>
                                                    <InputGroup size="sm" className="mb-3">
                                                        <Form.Control aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            type="number" placeholder={el.placeholder} />
                                                    </InputGroup>
                                                </Col>
                                            )
                                        })
                                    }
                                </Card.Text>
                                <Button variant="light">
                                    <img src="./static/icons/price.png" alt="" />
                                    Price: <span style={{color:"#E65425" }}>$0.00</span>
                                </Button>
                                <small>Questions? FAQ</small>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Button variant="light" style={{ border: "1px dashed #E65425",color:"#E65425" }}>+ Create New Label</Button>{' '}
                </Row>
            </Container>
        </>
    )
}

export default NewLabel