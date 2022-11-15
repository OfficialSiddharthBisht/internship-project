import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ConfirmLogout from '../components/ConfirmLogout';
function Header() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Form.Group size="sm" className="mb-3 navbar-search" style={{ display: "flex", marginTop: "0px", width: "98%", margin: "auto" }}>
                <Form.Control type="text" className='border-0' placeholder="Search by ID, To Name, From Name.." />
                <img src="./static/icons/notifybtn.png" alt="" style={{ margin: "0px 5px 0px 5px" }} />
                <Modal 
                    // size='lg'
                    isOpen={modal}
                    toggle={() => setModal(false)}
                >
                    <ModalBody className='modal-body'>
                        <ConfirmLogout />
                    </ModalBody>
                </Modal>
                <img src="./static/icons/logout.png" alt=""
                    style={{ margin: "0px 5px 0px 5px" }}
                    onClick={() => {
                        setModal(true)
                    }}
                />
            </Form.Group>
        </>
    )
}

export default Header