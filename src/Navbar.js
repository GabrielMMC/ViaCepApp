import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid text-white">
        <a className="navbar-brand text-white" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item text-white">
              <a className="nav-link active text-white" aria-current="page" href="#">Sobre Nós</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">Serviços</a>
            </li>
            <li className="nav-item dropdown text-white">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Produtos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Camisinha</a></li>
                <li><a className="dropdown-item" href="#">Camisinha de Churros</a></li>
                <li><a className="dropdown-item" href="#">Camisinha de Tilápia</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white">Em breve</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 text-white" type="search" placeholder="Buscar..." aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar