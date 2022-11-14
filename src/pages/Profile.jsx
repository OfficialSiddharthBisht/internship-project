import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, FloatingLabel, Button } from 'react-bootstrap';
import Header from '../layout/Header';
function Profile() {
    const [profileInfo, setProfileInfo] = useState([
        {
            info: "Username",
            icon: "./static/icons/username.png",
        },
        {
            info: "Email",
            icon: "./static/icons/email.png",
        },
        {
            info: "Discord",
            icon: "./static/icons/discord2.png",
        },
        {
            info: "Telegram",
            icon: "./static/icons/telegram2.png",
        },
        {
            info: "Balance",
            icon: "./static/icons/balance2.png",
        },
        {
            info: "Joined",
            icon: "./static/icons/joined.png",
        },
    ])
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Profile Information</Card.Title>
                                <Card.Text>
                                    {
                                        profileInfo.map((el, index) => {
                                            return (
                                                <Col>
                                                    <InputGroup size="sm" className="mb-3">
                                                        <img src={el.icon} alt="" width={"45px"} height={"45px"} style={{ margin: "8px" }} />
                                                        <FloatingLabel
                                                            controlId="floatingInput"
                                                            label={el.info}
                                                            className="mb-3"
                                                        >
                                                            <Form.Control aria-label="Small"
                                                                aria-describedby="inputGroup-sizing-sm"
                                                                type="text" placeholder={el.info} />
                                                        </FloatingLabel>
                                                    </InputGroup>
                                                </Col>
                                            )
                                        })
                                    }
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
                                    <Card.Body className='card-body'>
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
                                    <Card.Body className='card-body'>
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
                                    <Card.Body className='card-body'>
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