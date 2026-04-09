import React, { useState, useEffect} from "react";
import { Navbar, Nav, Container, NavDropdown, Dropdown, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import defaultAvatarImg from "../../assets/img/defaultAvatarImg.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useBackends } from "../../context/BackendsContext.jsx";
import ReinitModal from "../Modals/ReinitModal/ReinitModal";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import { useAuth } from "../../context/AuthContext";
import { Bell, BoxArrowRight  } from "react-bootstrap-icons";
import { usePermisos } from "../../hooks/usePermisos.js";
import TutorialModal from "../../components/Modals/TutorialModal/TutorialModal";
import "./Navbar.scss";


function AppNavbar({ onOpenBackend }) {

  const { puede } = usePermisos();
  const tienePermisoDatoTributario = puede("obtenerDatosTributarios");

  const { activeBackend, } = useBackends();

  const { getDatos, clearDatos, conteoImportantes } = useDatosTributarios(tienePermisoDatoTributario); // 👈 accede al refresco

  // ---------------- Estados de UI ----------------

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { user, authenticated, logout } = useAuth();
  const [isWaitOver, setIsWaitOver] = useState(false);
  const [show, setShow] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = () => setShow(false);

  // Dentro de la función AppNavbar
  useEffect(() => {
    if (tienePermisoDatoTributario) {
      getDatos(); // Forzamos una petición silenciosa al loguearse para actualizar la campana
    } else {
      clearDatos();
    }
  }, [tienePermisoDatoTributario, getDatos, clearDatos]);

    // ---------------- Funciones ----------------

  const handleToggle = () => {
    if (location.pathname === "/datos-tributarios") {
      // Refrescar datos directamente
      getDatos();
    } else {
      navigate("/datos-tributarios");
    }
  };

  // const userPicture = user?.picture || defaultAvatarImg;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaitOver(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const userPicture = isWaitOver ? (user?.picture || defaultAvatarImg) : defaultAvatarImg;

  const hasUser = Boolean(user);
  const canNavigatePrivate = Boolean(authenticated && user);

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
                <Navbar.Brand className="app-brand" as={Link} to="/">AppDeclaración</Navbar.Brand>
                {activeBackend?.alias && (
                  <h6 className="backend-alias mb-0" title={activeBackend.alias}>
                    {activeBackend.alias}
                  </h6>
                )}
              </div>
            </div>


            {/* ***************************************** */}

            <div className="contCamp">
              <div className="d-flex align-items-center position-relative">
                {/* Contenedor de la campana con el badge */}
                <div
                  // className="position-relative d-flex align-items-center me-3 notificacion-wrapper"
                  className={`position-relative d-flex align-items-center me-3 notificacion-wrapper ${!tienePermisoDatoTributario ? "opacity-50" : ""}`}
                  // style={{ cursor: 'pointer' }}
                  style={{
                    cursor: tienePermisoDatoTributario ? 'pointer' : 'not-allowed',
                    filter: tienePermisoDatoTributario ? 'none' : 'grayscale(1)'
                  }}
                  // onClick={handleToggle}
                  onClick={(tienePermisoDatoTributario && canNavigatePrivate) ? handleToggle : undefined}
                  title={
                    !canNavigatePrivate
                      ? "Inicia sesión para ver datos tributarios"
                      : !tienePermisoDatoTributario
                        ? "No tienes permisos para ver datos tributarios"
                        : ""
                  }
                >
                  <Bell size={22} />

                  {/* Badge dinámico: Solo se muestra si hay registros marcados como importantes */}

                  {tienePermisoDatoTributario && conteoImportantes > 0 && (
                    <span className="badge-notificacion pulse-animation">
                      {conteoImportantes}
                    </span>
                  )}

                </div>

                {/* Toggle del menú móvil (hamburguesa) */}
                <Navbar.Toggle
                  // className="hjm"
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
                {hasUser ? (
                  <div className="offcanvas-user-header">
                    <img
                      key={userPicture}
                      src={userPicture}
                      alt="avatar"
                      className="offcanvas-user-avatar user-avatar"
                      loading="lazy"
                      onError={(e) => {
                              if (e.target.src !== defaultAvatarImg) {
                                e.target.src = defaultAvatarImg;
                              }
                      }}
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
                    <Nav.Link
                      onClick={() => {
                        if (!canNavigatePrivate) return;
                        setShow(false);
                        navigate("/productos");
                      }}
                      disabled={!canNavigatePrivate}
                      style={!canNavigatePrivate ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                      title={!canNavigatePrivate ? "Inicia sesión para ver productos" : ""}
                    >
                      <span className="icon-Verproductos"></span>
                      <span className="ms-2 d-lg-none">Ver Productos</span> {/* ms-2 añade un margen a la izquierda */}
                    </Nav.Link>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Add Facturas</Tooltip>}>
                    <Nav.Link
                      onClick={() => {
                        if (!canNavigatePrivate) return;
                        setShow(false);
                        navigate("/facturas");
                      }}
                      disabled={!canNavigatePrivate}
                      style={!canNavigatePrivate ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                      title={!canNavigatePrivate ? "Inicia sesión para ver facturas" : ""}
                    >
                      <span className="icon-AddFacturas"></span>
                      <span className="ms-2 d-lg-none">Facturas</span>
                    </Nav.Link>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" animation={false} overlay={<Tooltip>Contador</Tooltip>}>
                    <Nav.Link
                      onClick={() => {
                        if (!canNavigatePrivate) return;
                        setShow(false);
                        navigate("/contador");
                      }}
                      disabled={!canNavigatePrivate}
                      style={!canNavigatePrivate ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                      title={!canNavigatePrivate ? "Inicia sesión para ver contador" : ""}
                    >
                      <span className="icon-Contador"></span>
                      <span className="ms-2 d-lg-none">Contador</span>
                    </Nav.Link>
                  </OverlayTrigger>


                  {hasUser && (
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
                              key={userPicture}
                              src={userPicture}
                              alt="avatar"
                              width={34}
                              height={34}
                              className="rounded-circle user-avatar"
                              loading="lazy"
                              onError={(e) => {
                                      if (e.target.src !== defaultAvatarImg) {
                                        e.target.src = defaultAvatarImg;
                                      }
                              }}
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            // className="p-3 shadow-sm text-center"
                            className="p-3 text-center"
                            // style={{ minWidth: "220px" }}
                          >
                            <img
                              key={userPicture}
                              src={userPicture}
                              alt="avatar"
                              className="rounded-circle mb-2 user-avatar-lg"
                              loading="lazy"
                              onError={(e) => {
                                      if (e.target.src !== defaultAvatarImg) {
                                        e.target.src = defaultAvatarImg;
                                      }
                              }}
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
                    <NavDropdown.Item onClick={onOpenBackend}>Adicionar Backend</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShowTutorial(true)}>Guía de uso</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/backend-setup">Configurar Backend</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/donaciones">Donaciones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setShow(false)} as={Link} to="/acerca-de">Acerca de</NavDropdown.Item>
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
            <Nav.Link
              onClick={() => {
                if (!canNavigatePrivate) return;
                setShowMoreMenu(false);
                navigate("/admin");
              }}
              disabled={!canNavigatePrivate}
              style={!canNavigatePrivate ? { opacity: 0.5, cursor: "not-allowed" } : {}}
              title={!canNavigatePrivate ? "Inicia sesión para entrar a Admin" : ""}
            >
              Admin & Config
            </Nav.Link>
            <Nav.Link onClick={() => {setShow(false);onOpenBackend()}}>Adicionar Backend</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false); setShowTutorial(true)}}>Guía de uso</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false);navigate("/backend-setup");}}>Configurar Backend</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false);navigate("/donaciones");}}>Donaciones</Nav.Link>
            <Nav.Link onClick={() => {setShowMoreMenu(false);navigate("/acerca-de");}}>Acerca de</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <TutorialModal
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />

      </div>
    </>
  );
}

export default AppNavbar;