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
                <nav className="navbar px-5 py-3 bg-dark">
                    <NavLink exact to="/" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Inicio</NavLink>
                    <NavLink to="/e1" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio1</NavLink>
                    <NavLink to="/e2" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio2</NavLink>
                    <NavLink to="/e3" className="text-decoration-none text-light font-weight-bold" activeClassName="active" >Ejercicio3</NavLink>
                    <NavLink to="/e4" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio4</NavLink>

                </nav>
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/e1" element={<Ejercicio1 />} />
                    <Route path="/e2/" element={<Ejercicio2 />} />
                    <Route path="/e3/" element={<Ejercicio3 />} />
                    <Route path="/e4/" element={<Ejercicio4 />} />
                    <Route path="*" element={<Error />} />

                    {/* Repasar video 7 desde 01:30:00 +o- para repasar esto del user */}

                </Routes>
            </BrowserRouter>
            <div className="App bg-dark text-white py-3">
                Footer Común
            </div>
        </div>
    );
};
