import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import Header from '../layout/Header';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([
    {
      title: "Total Orders",
      num: "213",
      bg: "url('./static/background/bgTotalOrders.png')",
      icon: "./static/background/iconTotalOrders.png",
    },
    {
      title: "Balance",
      num: "$21.40",
      bg: "url('./static/background/bgBalance.png')",
      icon: "./static/background/iconBalance.png",
    },
    {
      title: "Total Deposited",
      num: "$52.60",
      bg: "url('./static/background/bgDeposit.png')",
      icon: "./static/background/iconDeposit.png",
    },
    {
      title: "Tickets",
      num: "203",
      bg: "url('./static/background/bgTickets.png')",
      icon: "./static/background/iconTickets.png",
    }
  ])
  const [latestOrders, setLatestOrders] = useState([
    {
      orderId: "#488183",
      trackingId: "845-3424-31",
      dateAndTime: "09/28/2022 | 10:30 AM",
      stage: "Tracking Number Created",
      status: "On Delivery",
      download: "PDF",
    },
    {
      orderId: "#499198",
      trackingId: "444-0024-32",
      dateAndTime: "09/28/2022 | 10:00 AM",
      stage: "Delivered",
      status: "Completed",
      download: "PDF",
    },
    // {
    //   orderId: "#145259",
    //   trackingId: "987-2438-37",
    //   dateAndTime: "09/28/2022 | 12:30 AM",
    //   stage: "Trackig Number Created",
    //   status: "Cancelled",
    //   download: "PDF",
    // },
  ]);
  const [recentDepositsData, setRecentDepositData] = useState([
    {
      amount: "1000.00",
      method: "Crypto",
      dateAndTime: "09/28/2022",
      status: "./static/icons/depositTrue.png",
    },
    {
      amount: "265.00",
      method: "Credit Card",
      dateAndTime: "12/12/2022",
      status: "./static/icons/depositFalse.png",
    },
    {
      amount: "120.00",
      method: "Credit Card",
      dateAndTime: "01/06/2022",
      status: "./static/icons/depositTrue.png",
    },
    // {
    //   amount: "120.00",
    //   method: "Credit Card",
    //   dateAndTime: "01/06/2022",
    //   status: "./static/icons/depositTrue.png",
    // }
  ]);
  return (
    <>
      <Container>
        <h5>Overview</h5>
        <Row>
          {
            cardsData.map((card, index) => {
              return (
                <Col key={index} responsive="sm" style={{
                  backgroundImage: `${card.bg}`,
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  padding: "18px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  margin: "7px"
                }}>
                  <span>
                    <h5>{card.title}</h5>
                    <h3>{card.num}</h3>
                  </span>
                  <span>
                    <img src={card.icon} alt="" />
                  </span>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <br />
      <Card className='border-0' style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
        <Card.Title style={{ display: "flex", marginLeft: "10px", marginTop: "10px", marginBottom: "-8px", justifyContent: "space-between", backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
          <span >Latest Orders</span>
          <span><small onClick={() => {
            navigate("/labels")
          }} style={{ color: "#426CFF", cursor: "pointer" }}>Show All →</small></span>
        </Card.Title>
        <br />
        <Card.Body style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
          <Table responsive="sm" className='table table-borderless'>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Tracking ID</th>
                <th>Date and Time</th>
                <th>Stage</th>
                <th>Status</th>
                <th>Download</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                latestOrders.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td>{el.orderId}</td>
                      <td>{el.trackingId}</td>
                      <td>{el.dateAndTime}</td>
                      <td>{el.stage}</td>
                      <td>{el.status}</td>
                      <td><img src="./static/icons/pdf.png" alt="" /> {el.download}</td>
                      <td>
                        <img src="./static/icons/downArrow.png" alt="" />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <br />
      <Container>
        <Row>
          <Col >
            <Card className='border-0'>
              <Card.Body className='card-body' style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
                <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Recent Deposits</span>
                  <span><small onClick={() => {
                    navigate('/deposits');
                  }} style={{ color: "#426CFF", cursor: "pointer" }}>Show All →</small></span>
                </Card.Title>
                <Table responsive="sm" className='table table-borderless'>
                  <thead style={{ color: "#656565" }}>
                    <tr>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Date and Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      recentDepositsData.map((el, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ color: "#FF7A49" }}>${el.amount}</td>
                            <td>{el.method}</td>
                            <td style={{ color: "#656565" }}>{el.dateAndTime}</td>
                            <td><img src={el.status} alt="" /></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0'>
              <Card.Body className='card-body' style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
                <Card.Title>Support</Card.Title>
                <Container>
                  <Row>
                    <Col>
                      <Card className='border-0'>
                        <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none", borderRadius: "10px" }}>
                          <Card.Title style={{ textAlign: "center" }}><h5>FAQ</h5></Card.Title>
                          <Card.Text style={{ textAlign: "center" }}>
                            What you should know, basing on what we have been asked about <br />
                            <span
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() => {
                                navigate('/faq');
                              }}>Show →</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Row style={{ backgroundColor: "#1E1E1E" }}>
                        <Card style={{ backgroundColor: "#1E1E1E" }}>
                          <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none", borderRadius: "10px" }} >
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/discord.png" alt="" /> </Col>
                                <Col>
                                  Join Discord Server
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Row>
                      <Row>
                        <Card style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
                          <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none", borderRadius: "10px" }}>
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/telegram.png" alt="" /> </Col>
                                <Col>
                                  Join Telegram Live Chat
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard