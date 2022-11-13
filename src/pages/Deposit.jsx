import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
function Deposit() {
    const [depositHistoryData, setDepositHistoryData] = useState([
        {
            amount: "10000.00",
            method: "Crypto",
            Date: "09/08/2022 | 10:30",
            status: true,
        },
        {
            amount: "2650.00",
            method: "Credit Card",
            Date: "30/08/2022 | 09:35",
            status: false,
        },
        {
            amount: "120.00",
            method: "Credit Card",
            Date: "08/09/2021 | 12:30",
            status: true,
        },
        {
            amount: "100.00",
            method: "Crypto",
            Date: "09/08/2022 | 10:30",
            status: true,
        },
        {
            amount: "28560.00",
            method: "Credit Card",
            Date: "30/08/2022 | 09:35",
            status: false,
        },
        {
            amount: "1920.00",
            method: "Credit Card",
            Date: "08/09/2021 | 12:30",
            status: true,
        }
    ])
    return (
        <>
            <h2>Deposits</h2>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className='card-body'>
                                <Card.Header style={{backgroundColor:"#404040",color:"#FFFFFF",margin:"0px"}}>
                                <h4 >Topup Account</h4>
                                </Card.Header>
                                <br />
                                <InputGroup size="lg">
                                    <Form.Control />
                                    <InputGroup.Text>USD</InputGroup.Text>
                                </InputGroup>
                                <p>Choose Payment Method</p>
                                <Row>
                                    <Col>
                                        <img src="./static/icons/creditCard.png" alt="Credit Card" width={"230px"} />
                                    </Col>
                                    <Col>
                                        <img src="./static/icons/crypto.png" alt="Cryptocurrency" width={"230px"} />
                                    </Col>
                                </Row>
                                <br />
                                <Form.Control aria-label="Card Number" placeHolder="Card Number" />
                                <br />
                                <Row>
                                    <Col>
                                        <InputGroup>
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Month"
                                                id="input-group-dropdown-1"
                                            >
                                                <Dropdown.Item>Jan</Dropdown.Item>
                                                <Dropdown.Item>Feb</Dropdown.Item>
                                                <Dropdown.Item>March</Dropdown.Item>
                                                {/* <Dropdown.Divider /> */}
                                                <Dropdown.Item>April</Dropdown.Item>
                                                <Dropdown.Item>May</Dropdown.Item>
                                                <Dropdown.Item>June</Dropdown.Item>
                                                {/* <Dropdown.Divider /> */}
                                                <Dropdown.Item>July</Dropdown.Item>
                                                <Dropdown.Item>Aug</Dropdown.Item>
                                                <Dropdown.Item>Sept</Dropdown.Item>
                                                {/* <Dropdown.Divider /> */}
                                                <Dropdown.Item>Oct</Dropdown.Item>
                                                <Dropdown.Item>Nov</Dropdown.Item>
                                                <Dropdown.Item>Dec</Dropdown.Item>

                                                {/* <Dropdown.Item>Separated link</Dropdown.Item> */}
                                            </DropdownButton>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Month"
                                                id="input-group-dropdown-1"
                                            >
                                                <Dropdown.Item>2022</Dropdown.Item>
                                                <Dropdown.Item>2023</Dropdown.Item>
                                                <Dropdown.Item>2024</Dropdown.Item>
                                                <Dropdown.Item>2025</Dropdown.Item>
                                                <Dropdown.Item>2026</Dropdown.Item>
                                                <Dropdown.Item>2027</Dropdown.Item>
                                                <Dropdown.Item>2028</Dropdown.Item>
                                            </DropdownButton>
                                        </InputGroup>
                                    </Col>
                                    <br /> <br /> <br />
                                    <Col>
                                        <Form.Control size="sm" placeholder='SVV Number' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Button variant="primary" style={{color:" #FFFFFF"}}>Proceed</Button>{' '}
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <h5>Deposit History</h5>
                        <Container>
                            <Card>
                                <Card.Body className='card-body'>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Amout</th>
                                                <th>Method</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                depositHistoryData.map((el, index) => {
                                                    return (
                                                        <tr>
                                                            <td style={{color:"#FF7A49"}}>{el.amount}</td>
                                                            <td style={{color:"#FFFFFF"}}>{el.method}</td>
                                                            <td style={{color:"#656565"}}>{el.Date}</td>
                                                            <td>{`${el.status}`}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Deposit