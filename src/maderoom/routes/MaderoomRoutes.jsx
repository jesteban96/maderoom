import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Carrousel } from "../components"

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>

            <Carrousel/>

            <div className="container">

                <Routes>

                    <Route path="" element={<></>}/>
                </Routes>
            </div>
        </>
    )
}
