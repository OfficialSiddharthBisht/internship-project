import React from 'react'
import { Accordion, Row, Col } from 'react-bootstrap';
import Header from '../layout/Header';
function FAQ() {
    const arr = [
        "Are taxes prepaid on international?",
        "How can I deposit?",
        "The tracking says pending delivery, is my label dead?",
        "What's the risks?",
        "Are taxes prepaid on international?",
        "What are the success rates?",
        "How long to generate label?",
        "Can I schedule pick-ups?",
        "The tracking says pending delivery, is my label dead?",
        "How can I deposit?",
    ]
    return (
        <>
            <Header />
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col md={5}>
                    <h2>Frequently Asked Questions</h2>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <p><small>What you should know,basing on <br /> what we have been asked about</small></p>
                </Col>
            </Row>
            <Accordion defaultActiveKey="0">
                {
                    arr.map((ele, index) => {
                        return (
                            <>
                                <Accordion.Item eventKey={index} className='border-0'>
                                    <Accordion.Header>{ele}</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </>
                        )
                    })
                }
            </Accordion>
        </>
    )
}

export default FAQ