import { useState, useEffect } from "react"

export const opcion = () =>{


    let valorW = document.documentElement.clientWidth



   const [nav, setnav] = useState('pc')

   const [wbody, setbody] = useState(valorW)

  const nav1 = () => {
    setnav( 'pc' )
  }

  const nav2 = () => {
    setnav( 'iphone' )
  }

  const tama =()=>{
    let valor = document.documentElement.clientWidth
    setbody(valor)
    return valor
  }

  useEffect(() => {
    
    tama()
   
  }, [document.documentElement.clientWidth])
  
  return
  nav1,
  nav2,
  nav,
  tama
}