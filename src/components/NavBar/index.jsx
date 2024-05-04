import React from 'react'


function Navbar() {
  return (
    <header className="header">
            <div id="menu">
                <nav>
                    <ul className="nav-items">
                        <li className="active"><a href="#">Empleos</a></li>
                        <li><a href="#">Bootcamp</a></li>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li className="dropdown">
                            <a href="#">Para profesionales</a>
                            <div className="dropdown-content">
                                <a href="#">Inicio</a>
                                <a href="#">Cursos y retos</a>
                                <a href="#">Preguntas</a>
                                <a href="#">Profesores</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#">Para empresas</a>
                            <div className="dropdown-content">
                                <a href="#">Inicio</a>
                                <a href="#">Publicar empleo</a>
                                <a href="#">Nuestro proceso</a>
                                <a href="#">Precios</a>
                                <a href="#">Pruebas Online</a>
                                <a href="#">Nómina</a>
                                <a href="#">Blog</a>
                                <a href="#">Comercial</a>
                                <a href="#">Calculadora de salario</a>
                            </div>
                        </li>

                    </ul>
                </nav>

            </div>
            <button className="boton-idioma">
                <i className="material-icons">language</i>
                Español
            </button>

            <div className="notification">
                <button className="bell">
                    <i className="fa fa-bell-o" ></i>
                    <span className="badge">15</span> 
                </button>
            </div>
            <div className="perfil">
                <button className="user">
                    <i className="fa fa-user-circle" ></i>
                    <div className="user-score">
                        <p>User</p>
                        <div className="score" >
                            <i  className="fa fa-diamond"></i>
                            <span >4500</span>
                        </div>
                    </div>
                </button>
            </div>
        </header>
  )
}

export default Navbar