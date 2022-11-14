import React, { useState } from 'react'
import { Card, Table, ProgressBar, Form, Row, Col, Button } from 'react-bootstrap';
import Header from '../layout/Header';
function Labels() {
    let [labelData, setLabelData] = useState([1, 2, 3, 4, 5])
    return (
        <>
            <Header />
            <h2>Labels History</h2>
            <Card className='border-0'>
                <Card.Body className='card-body'>
                    <Card.Text>
                        <Table className='table table-borderless'>
                            <tbody>
                                {
                                    labelData.map((data, index) => {
                                        return (
                                            <tr>
                                                <td><img src="./static/icons/status.png" alt="" /></td>
                                                <td>
                                                    Order ID:#4885271 <br />
                                                    <small>845-3421-31 | 14/11/2022</small>
                                                </td>
                                                <td>
                                                    Tracking Number Created
                                                    <small>From: USA,Florida,Miami</small>
                                                </td>
                                                <td width={"150px"}>
                                                    <ProgressBar variant="danger" now={index * 10} />
                                                </td>
                                                <td>
                                                    Delivered to Customer
                                                    <small>To:USA,California,LA</small>
                                                </td>
                                                <td><img src="./static/icons/pdf.png" alt="" />PDF </td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                                <td>
                                                    <img src="./static/icons/downArrow.png" alt="" />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Card.Text>
                    <Card.Footer width={"100%"} className="text-muted">
                        <Row>
                            <Col style={{borderRadius: "5px" }}>
                                <Button variant="light">You choose (2) files</Button>{' '}
                            </Col>
                            <Col style={{ marginLeft: "20%" }}>
                                <Button style={{ background: "#E65425" }}>Download as ZIP</Button>
                            </Col>
                            <Col>
                                <small>or</small>
                            </Col>
                            <Col>
                                <Button variant="light" style={{ border: "1px solid #E65425", color: "#E65425" }}>Download as PDF</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}

export default Labels