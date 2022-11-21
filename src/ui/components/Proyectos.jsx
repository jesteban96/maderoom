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
        const closet1P =[ { id:1, url: "./closet/c1/1.png", url2: "./closet/c1/2.png", url3: "./closet/c1/3.png"},
        { id:2, url: "./closet/c2/1.png", url2: "./closet/c2/2.png", url3: "./closet/c2/3.png" },
        { id:3, url: "./closet/c3/1.png", url2: "./closet/c3/2.png", url3: "./closet/c3/3.png" }
]   
  return (
    <>
    <section className='proyecto'>
    <div className="container proyecto ">
        <div className="row my-5 ">
                <div className="col-12">
                    <p className="h3 text-center "> PROYECTO </p>
                    
                </div>
        </div>
        <div className="row  ">
             
              {
                                    closet1P.map((e)=>{
                                        return (<ITEMCARD key={e.id} e={e}/>)
                                    })
                                }
              
                               
        </div>
    </div>
   
    </section>

    </>
  )
}
