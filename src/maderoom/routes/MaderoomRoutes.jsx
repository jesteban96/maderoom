import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Carrousel } from "../components"
import { MaderoomApp} from "../MaderoomApp";

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>
            
            <div className="">

                <Routes>

                    <Route path="" element={<MaderoomApp/>}/>
                </Routes>
                
            </div>

        </>
    )
}
