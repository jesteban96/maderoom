import { Link } from "react-router-dom";

export const Foother = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>Nosotros</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>Proyectos</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>Contactanos</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>About</Link></li>
                    </ul>
                    <p className="text-center text-muted">&copy; 2022 DevOpss, Inc</p>
                </footer>
            </div>
        </>
    )
}
