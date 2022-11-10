import React from 'react'

export const NAVBARFIRT = () => {
  return (
   <>
   <nav className="navbar navbar-expand color-b">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src='../../../public/LOGO/logo3.png' alt="MadeRoom"  /></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon  color"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 color d-flex align-items-center ">
                    <li className="nav-item">
                   {/*  active */}
                      <a className=" nav-link  color " aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown color">
                      <a className="nav-link dropdown-toggle color " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Proyectos
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Cocinas</a></li>
                        <li><a className="dropdown-item" href="#">Closet</a></li>
                        <li><a className="dropdown-item" href="#">Bar</a></li>
                        <li><a className="dropdown-item" href="#">Otros espacios</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  color">Contactanos</a> {/* disabled */}
                    </li>
                    <li className="nav-item ms-auto ">
                      
                    </li>
                  
                  </ul>
                  <div className="user"><img src='../../../public/LOGO/user2.png' alt=""  /> {/* disabled */}</div>
                </div>
              </div>
      </nav>
   </>
  )
}
