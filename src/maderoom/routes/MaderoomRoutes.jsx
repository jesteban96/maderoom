import { Route, Routes } from "react-router-dom"
import { ACERCADE } from "../../ui/components/Acercade"
import { Navbar } from "../../ui/components/Navbar"
import { Carrousel } from "../components"

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>

            {/* <Carrousel/> */}

            <ACERCADE/>
            <div className="container">

                <Routes>

                    <Route path="" element={<></>}/>
                </Routes>
                
            </div>

        </>
    )
}
