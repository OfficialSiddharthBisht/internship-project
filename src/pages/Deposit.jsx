import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, Form, InputGroup, DropdownButton, Dropdown, Table } from 'react-bootstrap';
import { Box } from "@material-ui/core";
import Header from '../layout/Header';
import { Pagination } from "@material-ui/lab";
function ShowOne(creditOption) {
    if (creditOption) {
        return (
            <>
                <Form.Control className='border-0' aria-label="Card Number" placeHolder="Card Number" />
                <br />
                <Row>
                    <Col>
                        <InputGroup>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Month"
                                className='border-0'
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
                                title="Year"
                                id="input-group-dropdown-1"
                                className='border-0'
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
                        <Form.Control className='border-0' size="sm" placeholder='SVV Number' />
                    </Col>
                </Row>
                <br />
            </>
        )
    } else {
        return (
            <>
                <img src="./static/icons/crypto-banner.png" alt="" width={"100%"} />
                <br /> <br />
            </>
        )
    }
}

function Deposit() {
    const [page, setPage] = useState(1);
    const [creditOption, setCreditOption] = useState(true);
    const [cryptoOption, setCryptoOption] = useState(false);
    const [depositHistoryData, setDepositHistoryData] = useState([
        {
            amount: "10000.00",
            method: "Crypto",
            Date: "09/08/2022 | 10:30",
            status: "./static/icons/depositTrue.png",
        },
        {
            amount: "2650.00",
            method: "Credit Card",
            Date: "30/08/2022 | 09:35",
            status: "./static/icons/depositFalse.png",
        },
        {
            amount: "120.00",
            method: "Credit Card",
            Date: "08/09/2021 | 12:30",
            status: "./static/icons/depositTrue.png",
        },
        {
            amount: "100.00",
            method: "Crypto",
            Date: "09/08/2022 | 10:30",
            status: "./static/icons/depositTrue.png",
        },
        {
            amount: "28560.00",
            method: "Credit Card",
            Date: "30/08/2022 | 09:35",
            status: "./static/icons/depositFalse.png",
        },
        {
            amount: "1920.00",
            method: "Credit Card",
            Date: "08/09/2021 | 12:30",
            status: "./static/icons/depositTrue.png",
        }
    ])
    return (
        <>
            <h2>Deposits</h2>
            <Container>
                <Row>
                    <Col>
                        <Card className='border-0'>
                            <Card.Body className='card-body' style={{ borderRadius: "10px" }}>
                                <Card.Header style={{ backgroundColor: "#404040", color: "#FFFFFF", margin: "0px" }}>
                                    <h4 >Topup Account</h4>
                                </Card.Header>
                                <br />
                                <InputGroup size="lg">
                                    <Form.Control className='border-0' />
                                    <InputGroup.Text style={{ backgroundColor: "#404040", color: "#FFFFFF", margin: "0px" }}>USD</InputGroup.Text>
                                </InputGroup>
                                <p>Choose Payment Method</p>
                                <Row>
                                    <Col>
                                        <img src="./static/icons/creditCard.png"
                                            alt="Credit Card"
                                            width={"230px"}
                                            onClick={() => {
                                                setCreditOption(true);
                                                setCryptoOption(false);
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <img src="./static/icons/crypto.png"
                                            alt="Cryptocurrency"
                                            width={"230px"}
                                            onClick={() => {
                                                setCreditOption(false);
                                                setCryptoOption(true);
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                {/*  */}
                                {ShowOne(creditOption)}
                                <Row>
                                    <Button variant="primary" style={{ color: " #FFFFFF" }}>Proceed</Button>{' '}
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <h5>Deposit History</h5>
                        <Container>
                            <Card className='border-0'>
                                <Card.Body className='card-body' style={{ borderRadius: "10px" }}>
                                    <Table responsive="sm" className='table table-borderless '>
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
                                                        <tr key={index}>
                                                            <td style={{ color: "#FF7A49" }}>₹{el.amount}</td>
                                                            <td style={{ color: "#FFFFFF" }}>{el.method}</td>
                                                            <td style={{ color: "#656565" }}>{el.Date}</td>
                                                            <td><img src={el.status} alt="" /></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <Box py={2} display="flex" justifyContent="flex-end" marginRight="-100%">
                                                <Pagination
                                                    backgroundColor="white"
                                                    count={2}
                                                    color="black"
                                                    size='large'
                                                    variant="text"
                                                    onChange={(e, value) => setPage(value)}
                                                />
                                            </Box>
                                        </tfoot>
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