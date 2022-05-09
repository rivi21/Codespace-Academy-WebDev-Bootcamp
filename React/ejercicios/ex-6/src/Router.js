import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Index from "./pages/Index";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
import Error from "./pages/Error";


export default function Router() {

    return (
        <div>
            <BrowserRouter>
                <nav className="navbar bg-dark py-2">
                    <NavLink to="/" activeClassName="active">Inicio</NavLink>
                    <NavLink to="/e1" activeClassName="active">Ejercicio1</NavLink>
                    <NavLink to="/e2" activeClassName="active">Ejercicio2</NavLink>
                    <NavLink to="/e3" activeClassName="active">Ejercicio3</NavLink>
                    <NavLink to="/e4" activeClassName="active">Ejercicio4</NavLink>
                    {/* Los NavLink no cambian xq están fuera de <Routes>. Haremos una Navbar con los NavLink y un footer que no cambiarán
                y cambiará solo lo de enmedio*/}
                </nav>
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/e1" element={<Ejercicio1 />} />
                    <Route path="/e2" element={<Ejercicio2 />} />
                    <Route path="/e3" element={<Ejercicio3 />} />
                    <Route path="/e4" element={<Ejercicio4 />} />
                    <Route path="*" element={<Error />} />
                    {/* Aquí definimos el nombre del parámetro que recibe en este caso user */}
                    {/* Repasar video 7 desde 01:30:00 +o- para repasar esto del user */}
                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>
            </BrowserRouter>
            <div className=" bg-dark text-white mt-2">
                <h3 className="py-2">Footer Común</h3>
            </div>
        </div>
    );
};
