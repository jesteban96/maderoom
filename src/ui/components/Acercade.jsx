import React from 'react'
/* import React from '' */

export const ACERCADE = () => {

	const ruta = ["../../../public/LOGO/acer.jpg"]
const rutaP = ["./LOGO/acer.jpg"]
  return (
    <>
    
		<section className="acerca-de" id="acerca-de">
			<div className="contenedor">
				<div className="foto">
					<img className='img-fuid' src={rutaP[0]} alt="imagen acerca de" />
				</div>
				<div className='nosotros'>
					{/* <div className='d-flex justify-content-center animate__animated animate__fadeInRight'>
						
							<img src="../../../LOGO/acercade.png" alt="logo" />
						
					</div> */}

					<h3>NOSOTROS...</h3>
					<p> Somos una empresa dedicada al Diseño e instalacion de muebles para tu hogar, contamos con dos años de experiensa en el ensamble de muebles para cocinas, cuartos, baños y otros espacio de tu hogar.  </p>
					<p>
						Al adquirir nuestros servicios contaras primero con una imagen Foto-Realista del espacio y del mueble a remodelar, una vez que el diseño este aprovado se procede a la etapa de cotizacion y finalmente al ensamble del espacio.
					</p>
					<a href="">Proyectos cotizados</a>
				</div>
			</div>
		</section>
		
       
    </>
  )
}
