import React, { useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Dropdown, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useToast } from "../../context/ToastContext";


import { useBackends } from "../../context/BackendsContext.jsx";
import ReinitModal from "../Modals/ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
// import { useProductos } from "../../context/ProductosContext.jsx";
// import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import { useAuth } from "../../context/AuthContext";
import { Bell, BoxArrowRight  } from "react-bootstrap-icons";
import "./Navbar.scss";

function AppNavbar({ onOpenBackend }) {

  const { activeBackend, } = useBackends();
  const { getDatos, conteoImportantes } = useDatosTributarios(); // 👈 accede al refresco


  // const { refreshProductos } = useProductos(); // 👈 usar el refresh del contexto
  // const { reinicializarSistemaForzado } = useConfigAdmin(); // 👈 usar el refresh del contexto
  // const { showToast } = useToast();

  // ---------------- Estados de UI ----------------

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { user, logout } = useAuth();

  // const [showAddModal, setShowAddModal] = useState(false);
  // const [showReinitModal, setShowReinitModal] = useState(false);
  const [show, setShow] = useState(false);
  // const [loadingOverlay, setLoadingOverlay] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);

    // ---------------- Funciones ----------------

  const handleToggle = () => {
    if (location.pathname === "/datos-tributarios") {
      // Refrescar datos directamente
      getDatos();
    } else {
      navigate("/datos-tributarios");
    }
  };

  return (
    <>
      <div className="navbar-return-container sticky-top">
        <Navbar key="lg" bg="light" expand="lg" className="shadow-sm mb-3 sticky-top navbar-nav-principal">
          <Container fluid>
            <div className="backend-circle-Brand">
              {activeBackend && (
                <div
                  className="backend-circle ms-2"
                  title={`Backend: ${activeBackend.alias}`}
                  onClick={onOpenBackend}
                >
                  {activeBackend.alias.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className="grupNavTex text-center">
                <Navbar.Brand className="app-brand" as={Link} to="/">DeclaraciónApp</Navbar.Brand>
                {activeBackend?.alias && (
                  <h6 className="backend-alias mb-0" title={activeBackend.alias}>

                    {activeBackend.alias}
                    {/* {user.nombre || user.correo} */}
                  </h6>
                )}
              </div>
            </div>


            {/* ***************************************** */}
            {/* <div className="contCamp">
              <div className="d-flex align-items-center">
                <Bell size={22} className="me-3 cursor-pointer" onClick={handleToggle}/>
              </div>
              <Navbar.Toggle className="hjm" onClick={() => setShow(true)} aria-controls="offcanvasNavbar-expand-lg" />
            </div> */}

            <div className="contCamp">
              <div className="d-flex align-items-center position-relative">
                {/* Contenedor de la campana con el badge */}
                <div
                  className="position-relative d-flex align-items-center me-3 notificacion-wrapper"
                  style={{ cursor: 'pointer' }}
                  onClick={handleToggle}
                >
                  <Bell size={22} />

                  {/* Badge dinámico: Solo se muestra si hay registros marcados como importantes */}

                  {conteoImportantes > 0 && (
                    <span className="badge-notificacion pulse-animation">
                      {conteoImportantes}
                    </span>
                  )}

                </div>

                {/* Toggle del menú móvil (hamburguesa) */}
                <Navbar.Toggle
                  className="hjm"
                  onClick={() => setShow(true)}
                  aria-controls="offcanvasNavbar-expand-lg"
                />
              </div>
            </div>
            {/* ************************************************ */}
            
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >

              <Offcanvas.Header closeButton className="offcanvas-header-user">
                {user ? (
                  <div className="offcanvas-user-header">
                    <img
                      src={user.picture || "https://via.placeholder.com/48"}
                      alt={user.nombre || user.correo}
                      className="offcanvas-user-avatar"
                    />
                    <div className="offcanvas-user-info">
                      <div className="offcanvas-user-name">
                        {user.nombre || "Usuario"}
                      </div>
                      <div className="offcanvas-user-email">
                        {user.correo}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                    Menú
                  </Offcanvas.Title>
                )}
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                >


                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Ver Productos</Tooltip>}>
                    <Nav.Link onClick={() => {setShow(false); navigate("/productos");}}>
                      <span className="icon-Verproductos"></span>
                      <span className="ms-2 d-lg-none">Ver Productos</span> {/* ms-2 añade un margen a la izquierda */}
                    </Nav.Link>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Add Facturas</Tooltip>}>
                    <Nav.Link onClick={() => {setShow(false); navigate("/facturas");}}>
                      <span className="icon-AddFacturas"></span>
                      <span className="ms-2 d-lg-none">Facturas</span>
                    </Nav.Link>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Contador</Tooltip>}>
                    <Nav.Link onClick={() => {setShow(false); navigate("/contador");}}>
                      <span className="icon-Contador"></span>
                      <span className="ms-2 d-lg-none">Contador</span>
                    </Nav.Link>
                  </OverlayTrigger>


                  {user && (
                    <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Usuario Activo</Tooltip>}>
                      <div className="navbar-session-Dropdown-desktop d-flex align-items-center ms-3">
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            as="div"
                            id="userDropdown"
                            className="cursor-pointer"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={user.picture || "https://via.placeholder.com/34"}
                              // alt={user.nombre || user.correo || "Usuario"}
                              alt=""
                              width={34}
                              height={34}
                              className="rounded-circle border border-light shadow-sm"
                              style={{
                                objectFit: "cover",
                                backgroundColor: "#e9ecef", // Un color gris suave de fondo mientras carga
                                display: "inline-block"
                              }}
                              // Si la URL de Google falla, ponemos el placeholder
                              // onError={(e) => {
                              //   e.target.src = "https://via.placeholder.com/34";
                              // }}
                              onError={(e) => {
                                const session = JSON.parse(localStorage.getItem('auth_session'));
                                e.target.src = session?.user?.picture || "https://via.placeholder.com/34";
                              }}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            className="p-3 shadow-sm text-center"
                            style={{ minWidth: "220px" }}
                          >
                            <img
                              src={user.picture || "https://via.placeholder.com/64"}
                              alt={user.nombre || "Usuario"}
                              className="rounded-circle mb-2"
                              width={64}
                              height={64}
                            />
                            <div className="fw-bold">{user.nombre || "Usuario desconocido"}</div>
                            <div className="text-muted small mb-2">{user.correo}</div>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              onClick={() => {
                                logout();
                                navigate("/");
                              }}
                              className=" text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1"
                            >
                              <BoxArrowRight size={16} /> Cerrar sesión
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </OverlayTrigger>
                  )}

                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Más</Tooltip>}>
                  <NavDropdown title={<span className="icon-menu-kebab"></span>} id="nav-dropdown" className="Navbar-NavDropdown-Mas-Desktop">
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/admin">Admin & Config</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={onOpenBackend}>Configurar Backend</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/about">Donaciones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/about">Acerca de</NavDropdown.Item>
                  </NavDropdown>
                  </OverlayTrigger>

                  {/* MAS */}
                  <Nav.Link
                    className="Navbar-NavLink-Mas nav-link-more"
                    onClick={() => {
                      setShow(false);
                      setShowMoreMenu(true);
                    }}
                  >
                    <span>Más</span>
                    <span className="arrow">›</span>
                  </Nav.Link>





                </Nav>
              </Offcanvas.Body>

              {/* Cerrar sesión – solo móvil */}
              {user && (
                <div className="offcanvas-logout-mobile romeo">
                  <button
                    className="offcanvas-logout-btn julieta"
                    onClick={() => {
                      setShow(false);
                      logout();
                      navigate("/");
                    }}
                  >
                    <BoxArrowRight size={18} />
                    <span>Cerrar sesión</span>
                  </button>
                </div>
              )}

            </Navbar.Offcanvas>



          </Container>
        </Navbar>

      {/* ========== OFFCANVAS MAS (NIVEL 2) ========== */}
      <Offcanvas
        placement="end"
        show={showMoreMenu}
        onHide={() => setShowMoreMenu(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowMoreMenu(false);
              setShow(true);
            }}
          >
            ← Más opciones
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => {setShowMoreMenu(false); navigate("/admin");}}>Admin & Config</Nav.Link>
            <Nav.Link onClick={() => {setShow(false);onOpenBackend()}}>Configurar Backend</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false);navigate("/about");}}>Donaciones</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false);navigate("/about");}}>Acerca de</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

        {/* <ReinitModal
          show={showReinitModal}
          onHide={() => setShowReinitModal(false)}
          onConfirm={async (confirmText, borrarCarpetas) => {
            if (confirmText !== "INICIALIZAR") return;
            setShowReinitModal(false);
            setLoadingOverlay(true);
            try {
              const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
              showToast(resp.mensaje, resp.ok ? "success" : "danger", 3000, "Navbar");
              refreshProductos();
            } finally {
              setLoadingOverlay(false);
            }
          }}


        /> */}


        {/* <LoadingOverlay show={loadingOverlay} /> */}

      </div>
    </>
  );
}

export default AppNavbar;