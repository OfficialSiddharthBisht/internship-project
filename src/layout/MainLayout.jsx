import React, { useEffect, useRef, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from "./Header";
import LogoutPopup from './LogoutPopup'
export default function MainLayout() {
  const navigate = useNavigate();
  const [isMobile, setisMobile] = useState(false);
  const closeMobileMenuRef = useRef();

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
  const [modalShow, setModalShow] = useState(false);
  const [menus, setmenus] = useState([
    {
      name: "New Label",
      link: "/newLabel",
      icon: "./static/icons/newLable.png",
      activeIcon: "./static/active/newLabel.png"
    },
    {
      name: "Dashboard",
      link: "/",
      icon: "./static/icons/dashboardIcon.png",
      activeIcon: "./static/active/dashboardIcon.png"
    },
    {
      name: "My Labels",
      link: "/labels",
      icon: "./static/icons/label.png",
      activeIcon: "./static/active/label.png"
    },
    {
      name: "Deposit",
      link: "/deposits",
      icon: "./static/icons/deposit.png",
      activeIcon: "./static/active/deposit.png"
    },
    {
      name: "Profile",
      link: "/profile",
      icon: "./static/icons/profile.png",
      activeIcon: "./static/active/profile.png"
    },
    {
      name: "Support",
      link: "/support",
      icon: "./static/icons/support.png",
      activeIcon: "./static/active/support.png"
    },
    {
      name: "FAQ",
      link: "/faq",
      icon: "./static/icons/faq.png",
      activeIcon: "./static/active/faq.png"
    },
  ]);
  function lineBreak(x, name, icon) {
    if (x === true) {
      return (
        <div>
          <hr style={{ color: "white", minWidth: "255px" }} />
          <br />
        </div>
      );
    }
    return (
      <br />
    )
  }
  const [selectedMenu, setselectedMenu] = useState(menus[0]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const whichIcon = (selectedMenuIcon, singleMenuIcon) => {
    if (singleMenuIcon.name === "New Label") {
      return (
        <span
          style={{
            marginLeft: "2.5rem",
            backgroundColor: "#F99A4D",
            padding: "5px",
            borderRadius: "10px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            color: "white"
          }}>
          {singleMenuIcon.name}
        </span>
      )
    }
    if (selectedMenuIcon.name !== singleMenuIcon.name) {
      return (
        <div style={{ marginLeft: "2.5rem" }}>
          <img src={singleMenuIcon.icon} alt="" />
        </div>
      )
    } else {
      return (
        <div style={{ marginLeft: "2.5rem" }}>
          <img src={singleMenuIcon.activeIcon} alt="" />
        </div>
      )
    }
  }
  const mobileMenu = () => {
    return (
      <>
        <div className="d-flex align-items-center container w-100 p-3">
          <div className="flex-fill ms-2">
            <a
              className="navbar-brand"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="./static/icons/logomobile.png" alt="Logo" className="img-fluid" style={{ maxWidth: "12rem" }} />
            </a>
          </div>
          <img src="./static/icons/search.png" alt="" />
          <img src="./static/icons/notifybtn.png" alt="" height={"40px"} style={{ margin: "0px 4px 0px 4px" }} />
          <img src="./static/icons/logout.png" alt="" height={"40px"}
            style={{ margin: "0px 4px 0px 4px" }}
            onClick={() => {
              setModalShow(true);
            }}
          />
          <button
            className="btn navbar-toggler"
            type="button"
            onClick={handleShow}
          >
            <img src="./static/icons/menu.png" alt="=" className="img-fluid" style={{ maxWidth: "2rem" }} />
          </button>
        </div>
        <LogoutPopup
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Offcanvas show={show} onHide={handleClose} className='bg-black'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <span className="d-flex flex-fill">
                <img closeButton src="./static/icons/logomobile.png" alt="logo" onClick={() => {
                  navigate("/");
                  handleClose();
                }} />
                <span style={{ minWidth: "100px" }}></span>
                <span>
                  <img src="./static/icons/search.png" alt="" />
                  <img src="./static/icons/notifybtn.png" alt="" height={"40px"} style={{ margin: "0px 5px 0px 5px" }} />
                  <img src="./static/icons/logout.png" alt="" height={"40px"}
                    style={{ margin: "0px 5px 0px 5px" }}
                    onClick={() => {
                      setModalShow(true);
                    }}
                  />
                </span>
              </span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="pt-0 pe-4 bg-black">
              <hr />
              <div className="mobile-menu">
                <ul className="navbar-nav">
                  {menus.map((singleMenu, index) => {
                    return (
                      <div key={index}>
                        <div
                          className={
                            selectedMenu.name == singleMenu.name
                              ? "d-flex align-items-center text-white text-large p-0 rounded mb-0 cp"
                              : "d-flex align-items-center menu p-0 text-large rounded mb-0 cp"
                          }
                          style={{
                            fontSize: "large"
                          }}
                          onClick={() => {
                            setselectedMenu(singleMenu);
                            navigate(singleMenu.link);
                            handleClose();
                          }}
                        >
                          {whichIcon(selectedMenu, singleMenu)}
                          <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                            {index !== 0 ? singleMenu.name : ""}
                          </p>
                        </div>
                        {lineBreak(index === 0 || index === 3, singleMenu.name, singleMenu.icon)}
                      </div>
                    );
                  })}
                  <Col>
                    <Card style={{ margin: "0 10% 0 10%", backgroundColor: "#282828" }} className='border-0'>
                      <Card.Body className="card-body" style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px", marginBottom: "-25px" }}>
                        <span><img src="./static/icons/dollar.png" alt="" /> Balance</span>
                        <span>$100.00</span>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ margin: "15% 10% 0 10%", backgroundColor: "#282828" }} className='border-0'>
                      <Card.Body className="card-body" style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px" }}>
                        <span><img src="./static/icons/createMob.png"
                          alt=""
                          width={"30px"}
                          onClick={() => {
                            navigate("/newlabel");
                          }}
                        /> Create New Label</span>
                      </Card.Body>
                    </Card>
                  </Col>
                </ul>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  // --------------------------------------------------
  return (
    <>
      <div className={isMobile ? "" : "d-flex"}>
        <div className="d-lg-none">
          {mobileMenu()}
        </div>

        <nav className="d-none d-lg-block" style={{ position: "fixed" }}>
          <div style={{ display: "flex", flexDirection: "column", minWidth: "275px", minHeight: "100vh" }}>
            <div className="p-4">
              <a href="/">
                <img src="./static/icons/theLogo.png" alt="" height={"25px"} />
              </a>
              <hr />
              <div style={{ marginTop: "1rem" }}>
                {menus.map((singleMenu, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={
                          selectedMenu.name == singleMenu.name
                            ? "d-flex align-items-center text-white text-bold rounded cp"
                            : "d-flex align-items-center menu text-bold rounded cp"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setselectedMenu(singleMenu);
                          navigate(singleMenu.link);
                        }}
                      >
                        {/* <div style={{ marginLeft: "2.5rem" }}> */}
                        {/* <img src={singleMenu.icon} alt="" /> */}
                        {/* </div> */}

                        {whichIcon(selectedMenu, singleMenu)}
                        <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                          {index !== 0 ? singleMenu.name : ""}
                        </p>
                      </div>
                      {lineBreak(index === 0 || index === 3, singleMenu.name, singleMenu.icon)}
                    </div>
                  );
                })}
              </div>
            </div>
            <Col>
              <Card style={{ margin: "0 15% 0 15%", backgroundColor: "#282828" }} className='border-0'>
                <Card.Body className="card-body" style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px", marginBottom: "-25px" }}>
                  <span><img src="./static/icons/dollar.png" alt="" /> Balance</span>
                  <span>$100.00</span>
                </Card.Body>
              </Card>
            </Col>
            <img src="./static/icons/create.png" alt="" height={"240px"} width={"75%"} style={{ margin: "0 auto 0 auto", marginBottom: "50px", cursor: "pointer" }} onClick={() => {
              navigate("/newlabel");
            }} />
          </div>
        </nav>

        <section className={isMobile ? "p-3" : "home flex-fill p-5"} style={{ marginLeft: isMobile ? "0px" : "275px", maxWidth: "100%" }}>
          <Header />
          <Outlet />
        </section>
      </div>
    </>
  );
}
