import { Route, Routes } from "react-router-dom";
import { MaderoomRoutes } from "../maderoom/routes/MaderoomRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/*" element={<MaderoomRoutes/>}/>

            </Routes>
        </>
    )
}
