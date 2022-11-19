import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import LogoutPopup from './LogoutPopup';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import ConfirmLogout from '../components/ConfirmLogout';
function Header() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Form.Group size="sm" className="mb-3 navbar-search" style={{ display: "flex", marginTop: "0px", width: "98%", margin: "auto", border: "2px solid grey", borderRadius: "10px", marginTop: "-34px" }}>
                <Form.Control type="text" className='border-0' placeholder="Search by ID, To Name, From Name.." />
                <img src="./static/icons/notifybtn.png" alt="" style={{ margin: "0px 5px 0px 5px" }} />
                <img src="./static/icons/logout.png" alt=""
                    style={{ margin: "0px 5px 0px 5px" }}
                    onClick={() => {
                        setModalShow(true);
                    }}
                />
            </Form.Group>
            <LogoutPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default Header