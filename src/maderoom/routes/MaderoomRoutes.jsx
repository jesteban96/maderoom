import { Route, Routes } from "react-router-dom"
import { Foother } from "../../ui/components/Foother";
import { Navbar } from "../../ui/components/Navbar"
import { Contactanos } from "../components";
import { MaderoomApp} from "../MaderoomApp";

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>
            
            <div >

                <Routes>
                    <Route path="" element={<MaderoomApp/>}/>
                    <Route path="Contactanos" element={<Contactanos/>}/>
                </Routes>
                
            </div>

            <Foother/>  

        </>
    )
}
