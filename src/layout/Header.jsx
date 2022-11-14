import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Header() {
    return (
        <>
            <Form.Group size="sm" className="mb-3 navbar-search" style={{display:"flex",marginTop:"0px",width:"98%",margin:"auto"}}>
                <Form.Control type="text" placeholder="Search by ID, To Name, From Name.." />
                <img src="./static/icons/notifybtn.png" alt="" style={{margin:"0px 5px 0px 5px"}}/>
                <img src="./static/icons/logout.png" alt="" style={{margin:"0px 5px 0px 5px"}}/>
            </Form.Group>
        </>
    )
}

export default Header