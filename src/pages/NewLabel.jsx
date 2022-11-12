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
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    Create New Label
                </Row>
            </Container>
        </>
    )
}

export default NewLabel