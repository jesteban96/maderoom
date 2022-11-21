import { Route, Routes } from "react-router-dom"
import { ACERCADE } from "../../ui/components/Acercade";
import { Foother } from "../../ui/components/Foother";
import { Navbar } from "../../ui/components/Navbar"
import { PROYECTOS } from "../../ui/components/Proyectos";
import { Carrousel, Contactanos, Slogan } from "../components";
import { MaderoomApp} from "../MaderoomApp";

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>
            {/* <Carrousel/>
            <Slogan/>
            <ACERCADE/>
            <PROYECTOS/> */}
            <div >

                <Routes>
                    <Route path="/" element={<MaderoomApp/>}/>
                    {/* <Route path="Contactanos" element={<Contactanos/>}/> */}
                </Routes>
                
            </div>

            <Foother/>  

        </>
    )
}
