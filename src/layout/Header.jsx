import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import LogoutPopup from './LogoutPopup';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import ConfirmLogout from '../components/ConfirmLogout';
function Header() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div style={{ display: "flex", marginTop: "0px", width: "100%", margin: "auto", marginTop: "-34px" }}>
                <Form.Group size="sm" className="mb-3 navbar-search" style={{ minWidth: "90%" }}>
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