import { Route, Routes } from "react-router-dom"
import { ACERCADE } from "../../ui/components/Acercade"
import { PROYECTOS } from "../../ui/components/Proyectos"
import { Navbar } from "../../ui/components/Navbar"
import { Carrousel } from "../components"

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            <div>hola2</div>
            {/* <Carrousel/> */}

            <ACERCADE/>

           
            <PROYECTOS/>
            
            <div className="container">

                <Routes>

                    <Route path="" element={<></>}/>
                </Routes>
                
            </div>

        </>
    )
}
