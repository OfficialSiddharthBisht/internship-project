import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import Header from '../layout/Header';

function Dashboard() {
  const [cardsData, setCardsData] = useState([
    {
      title: "Total Orders",
      num: "2103",
      bg: "url('./static/background/bgTotalOrders.png')",
      icon: "./static/background/iconTotalOrders.png",
    },
    {
      title: "Balance",
      num: "$2120.40",
      bg: "url('./static/background/bgBalance.png')",
      icon: "./static/background/iconBalance.png",
    },
    {
      title: "Total Deposited",
      num: "$52 000.60",
      bg: "url('./static/background/bgDeposit.png')",
      icon: "./static/background/iconDeposit.png",
    },
    {
      title: "Tickets",
      num: "2103",
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
    {
      orderId: "#145259",
      trackingId: "987-2438-37",
      dateAndTime: "09/28/2022 | 12:30 AM",
      stage: "Trackig Number Created",
      status: "Cancelled",
      download: "PDF",
    },
  ]);
  const [recentDepositsData, setRecentDepositData] = useState([
    {
      amount: "1000.00",
      method: "Crypto",
      dateAndTime: "09/28/2022",
      status: true,
    },
    {
      amount: "265.00",
      method: "Credit Card",
      dateAndTime: "12/12/2022",
      status: false,
    },
    {
      amount: "120.00",
      method: "Credit Card",
      dateAndTime: "01/06/2022",
      status: true,
    }
  ]);
  return (
    <>
      <Header />
      <Container>
        <h5>Overview</h5>
        <Row>
          {
            cardsData.map((card, index) => {
              return (
                <Col responsive="sm" style={{
                  backgroundImage: `${card.bg}`,
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  padding: "9px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  margin: "10px"
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
      <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Latest Orders</span>
        <span><small style={{ color: "#426CFF" }}>Show All →</small></span>
      </Card.Title>
      <br />
      <Card className='border-0'>
        <Card.Body>
          <Table responsive="sm" className='table table-borderless'>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Tracking ID</th>
                <th>Date and Time</th>
                <th>Stage</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {
                latestOrders.map((el, index) => {
                  return (
                    <tr>
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
          <Col>
            <Card className='border-0'>
              <Card.Body className='card-body'>
                <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Recent Deposits</span>
                  <span><small style={{ color: "#426CFF" }}>Show All →</small></span>
                </Card.Title>
                <Table responsive="sm" className='table table-borderless'>
                  <thead>
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
                          <tr>
                            <td>{el.amount}</td>
                            <td>{el.method}</td>
                            <td>{el.dateAndTime}</td>
                            <td>{`${el.status}`}</td>
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
              <Card.Body className='card-body' style={{ backgroundColor: "#1E1E1E" }}>
                <Card.Title>Support</Card.Title>
                <Container>
                  <Row>
                    <Col>
                      <Card className='border-0'>
                        <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none" }}>
                          <Card.Title style={{ textAlign: "center" }}><h5>FAQ</h5></Card.Title>
                          <Card.Text style={{ textAlign: "center" }}>
                            What you should know, basing on what we have been asked about <br />
                            <a href="#">Show →</a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Row style={{ backgroundColor: "#1E1E1E" }}>
                        <Card style={{ backgroundColor: "#1E1E1E" }}>
                          <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none" }} >
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/discord.png" alt="" /> </Col>
                                <Col>
                                  Join <br />
                                  <span>Discord Server</span>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Row>
                      <Row>
                        <Card style={{ backgroundColor: "#1E1E1E", borderRadius: "10px" }}>
                          <Card.Body className='card-body' style={{ backgroundColor: " #282828", border: "none" }}>
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/telegram.png" alt="" /> </Col>
                                <Col>
                                  Join <br />
                                  Telegram Live Chat
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