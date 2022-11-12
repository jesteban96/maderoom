import { useState } from "react"

export const getcontador = (valor) =>{
    const [contador, setcontador] = useState(valor)
     const [num, setnum] = useState(0)

     const aumentar = () => {
         if (num <= 1) {

             setnum(num + 1) 
            }else{
                setnum(0)
            }
     }

     const disminuir = () => {
        if (num != 0) {
            setnum(num - 1) 
           }else{
               setnum(0)
           }
    }
   
    return {
        setcontador ,
        contador,
        num,
        aumentar,
        disminuir
    }
    

}