import React from 'react'

export const NAVBARFIRT = () => {



  return (
   <>
   <nav className="navbar navbar-dark  navbar-expand-lg  color-b">
              <div className="container-fluid">
                
                <a className="navbar-brand" href="#"><img src='../../../public/LOGO/logo3.png' alt="MadeRoom"  /></a>
    
                     <button className="navbar-toggler flota " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

                          <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MADE ROOM</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>

                          <div className="offcanvas-body " id="navbarSupportedContent">
                                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">

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
                                      <a className="nav-link color" href="#">Contactanos</a>
                                    </li>
                                    <li className="nav-item ms-auto ">
                                      
                                    </li>
                                  </ul> 
                                  <div className="offcanvas-header  ">
                                    <h5 className="offcanvas-title d-grid gap-2 col-6 mx-auto " id="offcanvasDarkNavbarLabel"><button type="button" class="btn btn-success">LOGIN</button></h5>
 
                                  </div>
                                  <div className="offcanvas user d-flex justify-content-end flex-row "><div className=''><img src='../../../public/LOGO/user2.png' alt=""  /> </div></div>
                          
                          </div>
                    </div>
            </div>
      </nav>
   </>
  )
}
