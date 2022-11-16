import React, { useEffect, useRef, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

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

  const [menus, setmenus] = useState([
    {
      name: "New Label",
      link: "/newLabel",
      icon: "./static/icons/newLable.png",
    },
    {
      name: "Dashboard",
      link: "/",
      icon: "./static/icons/dashboardIcon.png",
    },
    {
      name: "My Labels",
      link: "/labels",
      icon: "./static/icons/label.png",
    },
    {
      name: "Deposit",
      link: "/deposits",
      icon: "./static/icons/deposit.png"
    },
    {
      name: "Profile",
      link: "/profile",
      icon: "./static/icons/profile.png",
    },
    {
      name: "Support",
      link: "/support",
      icon: "./static/icons/support.png",
    },
    {
      name: "FAQ",
      link: "/faq",
      icon: "./static/icons/faq.png",
    },
  ]);

  const [selectedMenu, setselectedMenu] = useState(menus[0]);
// -------------------------------------------------------
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
              <img src="./static/icons/theLogo.png" alt="Logo" className="img-fluid" style={{ maxWidth: "15rem" }} />
            </a>
          </div>

          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img src="./static/icons/menu.png" alt="=" className="img-fluid" style={{ maxWidth: "2rem" }} />
          </button>
        </div>

        <div className="offcanvas offcanvas-end w-100" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header pt-3 bg-black" style={{color:"#FFFFFF",fontWeight:"bold"}}>
            <h5 id="offcanvasRightLabel">
              <img
                onClick={() => {
                  navigate("/");
                  closeMobileMenuRef.current.click();
                }}
                src="./static/icons/theLogo.png"
                alt="Logo"
                className="img-fluid"
              />
            </h5>
            <img
              src="./static/images/close.svg"
              alt="Logo"
              ref={closeMobileMenuRef}
              className="img-fluid"
              style={{ width: 40, cursor: "pointer" }}
              data-bs-dismiss="offcanvas"
            />
          </div>
          <div className="offcanvas-body pt-0 pe-4 bg-black">
            <div className="mobile-menu">
              <ul className="navbar-nav">
                {menus.map((singleMenu,index) => {
                  return (
                    <div
                      key={index}
                      className={
                        selectedMenu.name == singleMenu.name
                          ? "d-flex align-items-center bg-primary p-2 rounded mb-2 cp"
                          : "d-flex align-items-center menu p-2 rounded mb-2 cp"
                      }
                      onClick={() => {
                        setselectedMenu(singleMenu);
                        navigate(singleMenu.link);
                        closeMobileMenuRef.current.click();
                      }}
                    >
                      <div style={{ marginLeft: "0.4rem" }}>
                        <img src= {singleMenu.icon} alt="" />
                      </div>

                      <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                        {singleMenu.name}
                      </p>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
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
                <img src="./static/icons/theLogo.png" alt="" />
              </a>
              <hr />
              <div style={{ marginTop: "2rem" }}>
                {menus.map((singleMenu, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        selectedMenu.name == singleMenu.name
                          ? "d-flex align-items-center p-2 rounded mb-2 cp"
                          : "d-flex align-items-center menu p-2 rounded mb-2 cp"
                      }
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setselectedMenu(singleMenu);
                        navigate(singleMenu.link);
                      }}
                    >
                      {/* {singleMenu.icon} */}
                      <img src={singleMenu.icon} alt="" />
                      <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                        {singleMenu.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Col>
              <Card style={{ margin: "10%", backgroundColor: "#282828" }} className='border-0'>
                <Card.Body className="card-body" style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px" }}>
                  <span><img src="./static/icons/dollar.png" alt="" /> Balance</span>
                  <span>$100.00</span>
                </Card.Body>
              </Card>
            </Col>
            <img src="./static/icons/create.png" alt="" width={"75%"} style={{ margin: "auto", cursor: "pointer" }} onClick={() => {
              navigate("/newlabel");
            }} />
          </div>
        </nav>

        <section className={isMobile ? "p-3" : "home flex-fill p-5"} style={{ marginLeft: isMobile ? "0px" : "275px", maxWidth: "100%" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}
