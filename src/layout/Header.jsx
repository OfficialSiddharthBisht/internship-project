
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import LogoutPopup from './LogoutPopup';
function Header() {
    const [isMobile, setisMobile] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                setisMobile(window.innerWidth < 1200);
            },
            false
        );
    }, []);

    useEffect(() => {
        setisMobile(window.innerWidth < 1200);
    });
    return (
        <>
            <div
                className={isMobile ? "d-none" : "d-flex mb-3 navbar-search"}
                style={{ marginTop: "0px", width: "100%", margin: "auto", marginTop: "-35px" }}>
                <Form.Group size="sm" style={{ minWidth: "90%" }}>
                    <Form.Control type="text" className='border-1' placeholder="Search by ID, To Name, From Name.." />
                </Form.Group>
                <img src="./static/icons/notifybtn.png" alt="" height={"40px"} style={{ margin: "0px 5px 0px 5px" }} />
                <img src="./static/icons/logout.png" alt="" height={"40px"}
                    style={{ margin: "0px 5px 0px 5px" }}
                    onClick={() => {
                        setModalShow(true);
                    }}
                />
            </div>
            <LogoutPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Header