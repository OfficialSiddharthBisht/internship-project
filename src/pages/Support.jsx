import React from 'react'
import {Container,Row, Col ,Card,Table,Button,Form,DropdownButton,Dropdown,InputGroup} from 'react-bootstrap';
import Header from '../layout/Header';
function Support() {
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <Card className='border-0'>
                            <Card.Body className='card-body'>
                                <Card.Title>Open Support Ticket</Card.Title>
                                <Card.Text>
                                    {/* <Form.Label>Title</Form.Label> */}
                                    <Form.Control className='border-0' placeholder='Title' />
                                    <Form.Label>Category</Form.Label>
                                    <InputGroup>
                                        <DropdownButton
                                            variant="outline-secondary"
                                            title="Category"
                                            id="input-group-dropdown-1"
                                        >
                                            <Dropdown.Item>Category1</Dropdown.Item>
                                            <Dropdown.Item>Category2</Dropdown.Item>
                                            <Dropdown.Item>Category3</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    <br />
                                    <div className="form-field">
                                        <textarea type={"text"} className="form-control border-0" placeholder="Message" style={{height:"150px"}} />
                                    </div>
                                </Card.Text>
                                <Button className='border-0' style={{background: "#E65425",margin:"auto",width:"100%"}}>+ Open Ticket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0' style={{minHeight:"600px",minWidth:"50vw"}}>
                            <Card.Body className='card-body'>
                                <Card.Title>Support History</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>All</Col>
                                        <Col>Active</Col>
                                        <Col>Closed</Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Support