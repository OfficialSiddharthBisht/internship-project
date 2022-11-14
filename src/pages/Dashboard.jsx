import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'

function Dashboard() {
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
      <Container>
        <h5>Overview</h5>
        <Row>
          <Col>
            <Card>
              <Card.Body style={{ background: "linearGradient(92.01deg, #FF7A49 0%, #F99A4D 100%)" }}>
                <Card.Subtitle className="mb-2 text-muted">Total Orders</Card.Subtitle>
                <Card.Title>2103</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body style={{ background: "linearGradient(92.01deg, #FF7A49 0%, #F99A4D 100%)" }}>
                <Card.Subtitle className="mb-2 text-muted">Balance</Card.Subtitle>
                <Card.Title>$500</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body style={{ background: "linearGradient(92.01deg, #FF7A49 0%, #F99A4D 100%)" }}>
                <Card.Subtitle className="mb-2 text-muted">Total Deposits</Card.Subtitle>
                <Card.Title>$1100</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body style={{ background: "linearGradient(92.01deg, #FF7A49 0%, #F99A4D 100%)" }}>
                <Card.Subtitle className="mb-2 text-muted">Tickets</Card.Subtitle>
                <Card.Title>2103</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <h5>Latest Orders</h5>
      <Table>
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
                  <td>{el.download}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body className='card-body'>
                <Card.Title>Recent Deposits</Card.Title>
                <Table striped bordered hover>
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
            <Card>
              <Card.Body className='card-body'>
                <Card.Title>Support</Card.Title>
                <Container>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "center" }}><h1>FAQ</h1></Card.Title>
                          <Card.Text style={{ textAlign: "center" }}>
                            What you should know, basing on what we have been asked about <br />
                            <a href="#">Show →</a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Row>
                        <Card>
                          <Card.Body className='card-body'>
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/discord.png" alt="" /> </Col>
                                <Col>
                                  Join <br />
                                  Discord Server
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Row>
                      <Row>
                        <Card>
                          <Card.Body className='card-body'>
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