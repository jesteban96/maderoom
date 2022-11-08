import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"

export const MaderoomRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

                <Routes>

                    <Route path="" element={<></>}/>
                </Routes>
            </div>
        </>
    )
}
