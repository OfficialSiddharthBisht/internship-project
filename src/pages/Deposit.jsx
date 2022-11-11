import React from 'react'
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
    return (
        <>
            <h2>Deposits</h2>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Subtitle className="mb-2 text-muted">Topup Account</Card.Subtitle>
                            <Card.Body>
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
                                    <Button variant="primary">Primary</Button>{' '}
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <h5>Deposit History</h5>
                        <Container>
                            <Card>
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
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Deposit