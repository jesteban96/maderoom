import React from 'react'
import { getcontador } from '../../../maderoom/hooks/contador'

export const ITEMCARD = ({e}) => {


    const { url, url2, url3 } = e


   
   const {
    setcontador ,
    contador ,
    aumentar, 
    num,
    disminuir

    } = getcontador([url, url2, url3])
    // console.log(num)
     return (
    <>
     
         
      {/*   <div className="col-12 col-sm-6  col-md-4 col-lg-3 col opaci my-3"> */}
			<div className="col-12 col-md-6 col-lg-4 my-2 d-flex justify-content-between"> 
      	<div className="card"  >
                 
					<img src={contador[num]} alt="" />
					<div className="card-body">
						<h5 className="card-title">CLOSET</h5>
						<h6 className="card-subtitle text-muted mb-2">Diseño Foto-Realista</h6>
						<p className="card-text ">Lorem ipsum dolor sit  </p>
            <div className='d-flex justify-content-between'>
                        <button type="button" className="btn " onClick={()=>{disminuir()}}>anterior</button>
                        <button type="button" className="btn " onClick={()=>{aumentar()}}>siguiente</button>

            </div>
					</div>
                    
				</div>
        </div> 
		{/* 	</div> */}
        
        
    </>
  )
}
