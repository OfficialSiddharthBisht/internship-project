import React, { useState } from 'react'
import { Container, Row, Col, Card, Table, Button, Form, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';
import Header from '../layout/Header';
function Support() {
    const [supportData, setSupportData] = useState([
        {
            icon:"./static/icons/wallet.png",
            ticket: "Topup Ticket",
            msg: "You sent a message",
            dateAndTime: "09/28/2022 | 10:30 AM",
            status: "Active",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Order Ticket",
            msg: "New message",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Active",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Order Ticket",
            msg: "New message",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Active",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Profile Ticket",
            msg: "",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Active",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Profile Ticket",
            msg: "",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Closed",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Other Ticket",
            msg: "",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Active",
        },
        {
            icon:"./static/icons/wallet.png",
            ticket: "Other Ticket",
            msg: "",
            dateAndTime: "09/28/2022 | 12:00 AM",
            status: "Closed",
        },
    ]);
    let All = [];
    let Active = [];
    let Closed = [];
    supportData.forEach((el, index) => {
        All.push(
            <tr key={index}>
                <td><img src={el.icon} alt="" /></td>
                <td>{el.ticket}</td>
                <td>{el.msg} <br/> <small>{el.dateAndTime}</small></td>
                <td> Status <br /> <span>{el.status} </span></td>
                <td style={{ color: "#426CFF" }}>Open →</td>
            </tr>
        )
        if (el.status === 'Active') {
            Active.push(
                <tr key={index}>
                    <td>{el.ticket}</td>
                    <td>{el.msg} <br /> <small>{el.dateAndTime}</small></td>
                    <td>{el.status}</td>
                    <td style={{ color: "#426CFF" }}>Open →</td>
                </tr>
            )
        }
        if (el.status === 'Closed') {
            Closed.push(
                <tr key={index}>
                    <td>{el.ticket}</td>
                    <td>{el.msg} <br /> <small>{el.dateAndTime}</small></td>
                    <td>{el.status}</td>
                    <td style={{ color: "#426CFF" }}>Open →</td>
                </tr>
            )
        }
    })
    const [value, setValue] = useState("all");
    let show;
    if (value === "all") {
        show = All;
      } else if (value === "active") {
        show = Active;
      } else if (value === "closed") {
        show = Closed;
      }
    return (
        <>
            <Header />
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
                                        <textarea type={"text"} className="form-control border-0" placeholder="Message" style={{ height: "150px" }} />
                                    </div>
                                </Card.Text>
                                <Button className='border-0' style={{ background: "#E65425", margin: "auto", width: "100%" }}>+ Open Ticket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0' style={{ minHeight: "600px", minWidth: "50vw" }}>
                            <Card.Body className='card-body'>
                                <Card.Title>Support History</Card.Title>
                                <Card.Text>
                                    <Col>
                                        <span onClick={() => setValue("all")} style={{margin:"10px"}}>All</span>
                                        <span onClick={() => setValue("active")} style={{margin:"10px"}}>Active</span>
                                        <span onClick={() => setValue("closed")} style={{margin:"10px"}}>Closed</span>
                                    </Col>
                                    <hr />
                                    <Table responsive="sm" className='table table-borderless'>
                                        <tbody>
                                            {show}
                                        </tbody>
                                    </Table>
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