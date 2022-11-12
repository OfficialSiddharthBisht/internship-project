import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function Profile() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Profile Information</Card.Title>
                                <Card.Text>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/username.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Username"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="text" placeholder="Siddharth Bisht" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/email.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="email" placeholder="siddharth@flamecloud.co.uk" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/discord2.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Discord"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="text" placeholder="user-discord" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/telegram2.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Telegram"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="text" placeholder="user-telegram" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/balance2.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Balance"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="text" placeholder="$00" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="sm" className="mb-3">
                                            <img src="./static/icons/joined.png" alt="" width={"45px"} style={{ margin: "10px" }} />
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Joined"
                                                className="mb-3"
                                            >
                                                <Form.Control aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    type="text" placeholder="21/07/2000" />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <br />
                                    <Row>
                                        <Col style={{ border: "1px solid grey", borderRadius: "5px" }}>
                                            <img src="./static/icons/trush.png" alt="" width={"30px"} style={{ margin: "2px" }} />
                                            <Button variant="light">Delete Account</Button>{' '}
                                        </Col>
                                        <Col style={{ marginLeft: "20%" }}>
                                            <Button style={{ background: "#E65425" }}>Save Changes</Button>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Profile Information</Card.Title>
                                        <Card.Text>
                                            <Form>
                                                <h3>Change Password</h3>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Old Password" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="New Password" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Repeat Password" />
                                                </Form.Group>
                                                <Button style={{ background: "#E65425" }}>Save Changes</Button>
                                            </Form>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Card style={{ alignItems: "center" }}>
                                    <img src="./static/icons/discord2.png" height={"70px"} width={"70px"} />
                                    <Card.Body>
                                        <Card.Title>Login with Discord</Card.Title>
                                        <Card.Text>
                                            After that it will be <br /> linked to your account
                                        </Card.Text>
                                        <Button variant="link">Go →</Button>
                                    </Card.Body>
                                    <Card.Footer style={{ width: "100%" }}>
                                        <Row>
                                            <Col>@siddharth</Col>
                                            <Col>unlink</Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ alignItems: "center" }}>
                                    <img src="./static/icons/telegram2.png" height={"70px"} width={"70px"} />
                                    <Card.Body>
                                        <Card.Title>Login with Telegram</Card.Title>
                                        <Card.Text>
                                            After that it will be <br /> linked to your account
                                        </Card.Text>
                                        <Button variant="link">Go →</Button>
                                    </Card.Body>
                                    <Card.Footer style={{ width: "100%" }}>
                                        <Row>
                                            <Col>@siddharth</Col>
                                            <Col>unlink</Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile