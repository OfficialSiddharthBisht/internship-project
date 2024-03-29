import React, { useState } from 'react'
import { Card, Table, ProgressBar, Form, Row, Col, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import '../assets/progressBar.css';
function ProgressBars() {
    return (
        <div className="progress-bar-container">
            <div className="bar">
                <div className="progress-bar">
                    <div className='progress'><span ></span></div>
                </div>
            </div>
        </div>
    )
}

function Labels() {
    let [labelData, setLabelData] = useState([1, 2, 3, 4, 5])
    return (
        <>
            <h2>Labels History</h2>
            <Card className='border-0'>
                <Card.Body className='card-body' style={{ borderRadius: "10px" }}>
                    <Card.Text>
                        <Table responsive="sm" className='table table-borderless'>
                            <tbody>
                                {
                                    labelData.map((data, index) => {
                                        return (
                                            <tr key={index}>
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
                                                    {/* <ProgressBar variant="danger" now={index * 10} /> */}
                                                    {ProgressBars()}
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
                            <Col style={{ borderRadius: "5px" }}>
                                <Button className='border-0' variant="light" style={{ width: "auto" }}> <small>You choose(2)files</small></Button>{' '}
                            </Col>
                            <Col style={{ marginLeft: "20%" }}>
                                <Button className='border-0' style={{ background: "#E65425" }}>Download as ZIP</Button>
                            </Col>
                            <Col>
                                <small>or</small>
                            </Col>
                            <Col>
                                <Button className='border-0' variant="light" style={{ border: "1px solid #E65425", color: "#E65425" }}>Download as PDF</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}

export default Labels