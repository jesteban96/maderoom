import { ACERCADE } from "../ui/components/Acercade"
import { PROYECTOS } from "../ui/components/Proyectos"
import { Carrousel, Slogan } from "./components"

export const MaderoomApp = () => {
    return (
        <>
            <Carrousel/>
            <Slogan/>
            <ACERCADE/>
            <PROYECTOS/>
        </>
    )
}
