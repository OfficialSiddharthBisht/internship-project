import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const [isMobile, setisMobile] = useState(false);
  const closeMobileMenuRef = useRef();

  const me = JSON.parse(localStorage.getItem("user", ""));

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
      name: "Dashboard",
      link: "/dashboard",
      icon: "./static/icons/dashboardIcon.png",
    },
    {
      name: "My Labels",
      link: "/orders",
      icon: "./static/icons/label.png",
    },
    {
      name: "Deposit",
      link: "/books",
      icon: "./static/icons/deposit.png"
    },
    {
      name: "Profile",
      link: "/catalogue",
      icon: "./static/icons/profile.png",
    },
    {
      name: "Support",
      link: "/categories",
      icon: "./static/icons/support.png",
    },
    {
      name: "FAQ",
      link: "/tickets",
      icon: "./static/icons/faq.png",
    },
  ]);

  const [selectedMenu, setselectedMenu] = useState(menus[0]);

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
              <img src="./static/icons/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: "2rem" }} />
            </a>
          </div>

          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img src="./static/images/menu-bars.svg" alt="=" className="img-fluid" style={{ maxWidth: "2rem" }} />
          </button>
        </div>

        <div className="offcanvas offcanvas-end w-100" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header pt-3">
            <h5 id="offcanvasRightLabel">
              <img
                onClick={() => {
                  navigate("/");
                  closeMobileMenuRef.current.click();
                }}
                src="./static/images/logo.svg"
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
          <div className="offcanvas-body pt-0 pe-4">
            <div className="mobile-menu">
              <ul className="navbar-nav">
                {menus.map((singleMenu) => {
                  return (
                    <div
                      className={
                        selectedMenu.name == singleMenu.name
                          ? "d-flex align-items-center bg-primary p-2 rounded text-white mb-2 cp"
                          : "d-flex align-items-center menu p-2 rounded text-dark mb-2 cp"
                      }
                      onClick={() => {
                        setselectedMenu(singleMenu);
                        navigate(singleMenu.link);
                        closeMobileMenuRef.current.click();
                      }}
                    >
                      <div style={{ marginLeft: "0.4rem" }}>{singleMenu.icon}</div>

                      <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                        {singleMenu.name}
                      </p>
                    </div>
                  );
                })}
              </ul>

              <div className="">
                {localStorage.getItem("accessToken", null) && (
                  <>
                    <a
                      className="btn btn-primary ms-2 mt-4"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                        closeMobileMenuRef.current.click();
                      }}
                    >
                      Logout
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={isMobile ? "" : "d-flex"}>
        <div className="d-lg-none">{mobileMenu()}</div>

        <nav className="d-none d-lg-block" style={{ position: "fixed" }}>
          <div style={{ display: "flex", flexDirection: "column", minWidth: "275px", minHeight: "100vh" }}>
            <div className="p-4">
              <a href="/">
                <img className="zi-2" src="/static/icons/logo.png" alt="LabelFalcon" style={{ width: "2rem" }} />
                LABELFALCON
              </a>

              <div style={{ marginTop: "2rem" }}>
                {menus.map((singleMenu) => {
                  return (
                    <div
                      className={
                        selectedMenu.name == singleMenu.name
                          ? "d-flex align-items-center bg-primary p-2 rounded text-white mb-2 cp"
                          : "d-flex align-items-center menu p-2 rounded text-dark mb-2 cp"
                      }
                      onClick={() => {
                        setselectedMenu(singleMenu);
                        navigate(singleMenu.link);
                      }}
                    >
                      {/* {singleMenu.icon} */}
                      <img src= {singleMenu.icon} alt="" />
                      <p className="mb-0" style={{ marginLeft: "0.5rem" }}>
                       {singleMenu.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-fill"></div>

            <div className="bg-dark p-3 d-flex align-items-center">
              <Avatar name={me?.email} size="35" round={true} color={"#cd5237"} />

              <h6 className="text-light" style={{ marginLeft: "0.6rem", marginTop: "0.5rem" }}>
                Create New Lablel
              </h6>
            </div>
          </div>
        </nav>

        <section className={isMobile ? "p-3" : "home flex-fill p-5"} style={{ marginLeft: isMobile ? "0px" : "275px", maxWidth: "100%" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}
