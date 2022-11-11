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
      icon: <i class="fa-solid fa-gauge"></i>,
    },
    {
      name: "Orders",
      link: "/orders",
      icon: <i class="fa-solid fa-bars"></i>,
    },
    {
      name: "Books",
      link: "/books",
      icon: <i class="fa-solid fa-book"></i>,
    },
    {
      name: "Catalogue",
      link: "/catalogue",
      icon: <i class="fa-solid fa-book"></i>,
    },
    {
      name: "Categories",
      link: "/categories",
      icon: <i class="fa-solid fa-table-cells-large"></i>,
    },
    {
      name: "Tickets",
      link: "/tickets",
      icon: <i class="fa-solid fa-ticket"></i>,
    },
    {
      name: "Coupons",
      link: "/coupons",
      icon: <i class="fa-solid fa-tag"></i>,
    },
    {
      name: "Workers",
      link: "/workers",
      icon: <i class="fa-solid fa-user-nurse"></i>,
    },
    {
      name: "Users",
      link: "/users",
      icon: <i class="fa-solid fa-user"></i>,
    },
    {
      name: "Website Settings",
      link: "/settings",
      icon: <i class="fa-solid fa-gear"></i>,
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
              <img src="./static/images/logo.svg" alt="Logo" className="img-fluid" style={{ maxWidth: "15rem" }} />
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
          <div style={{ display: "flex", flexDirection: "column", minWidth: "275px", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
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
                      <div style={{ marginLeft: "0.4rem" }}>{singleMenu.icon}</div>

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
                {me?.email}
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
