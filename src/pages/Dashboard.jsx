import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';

function Dashboard() {
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

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
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
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Support</Card.Title>
                <Container>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "center" }}><h1>FAQ</h1></Card.Title>
                          <Card.Text style={{ textAlign: "center" }}>
                            What you should know, basing on what we have been asked about <br/>
                            <a href="#">Show →</a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Row>
                        <Card>
                          <Card.Body>
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/discord.png" alt="" /> </Col>
                                <Col>
                                  Join <br/>
                                  Discord Server
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Row>
                      <Row>
                        <Card>
                          <Card.Body>
                            <Card.Text>
                              <Row>
                                <Col> <img src="./static/icons/telegram.png" alt="" /> </Col>
                                <Col>
                                  Join <br/>
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