import React, { useState } from 'react'
import { ITEMCARD } from './proyectos/itemcard'

export const PROYECTOS = () => {
   
  /*   const {  setcontador,
             contador,
             aumentar
            } = getcontador(1) */

    const closet1 =[ { id:1, url: "../../../../public/closet/c1/1.png", url2: "../../../../public/closet/c1/2.png", url3: "../../../../public/closet/c1/3.png"},
                     { id:2, url: "../../../../public/closet/c2/1.png", url2: "../../../../public/closet/c2/2.png", url3: "../../../../public/closet/c2/3.png" },
                     { id:3, url: "../../../../public/closet/c3/1.png", url2: "../../../../public/closet/c3/2.png", url3: "../../../../public/closet/c3/3.png" }
        ]
       
  return (
    <>
    <div className="container proyecto margen">
        <div className="row my-5 ">
                <div className="col-12">
                    <p className="h3 text-center "> PROYECTO </p>
                    
                </div>
        </div>
        <div className="row d-flex justify-content-center">
              
                                {
                                    closet1.map((e)=>{
                                        return (<ITEMCARD key={e.id} e={e}/>)
                                    })
                                }
        </div>
    </div>
   
  

    </>
  )
}
