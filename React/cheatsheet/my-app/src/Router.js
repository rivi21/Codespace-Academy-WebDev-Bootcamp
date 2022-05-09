import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from "./pages/Error";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <NavLink to="/" activeClassName="active">Ir a Inicio</NavLink>
                <NavLink to="/dashboard" activeClassName="active">Panel de Control</NavLink>
                <NavLink to="/record/2" activeClassName="active">Record</NavLink>
                {/* Los NavLink no cambian xq están fuera de <Routes>. Haremos una Navbar con los NavLink y un footer que no cambiarán
                y cambiará solo lo de enmedio*/}
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/record/:user" element={<Record />} />
                    {/* Aquí definimos el nombre del parámetro que recibe en este caso user */}
                    {/* Repasar video 7 desde 01:30:00 +o- para repasar esto del user */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>

            <h1>Footer Común</h1>{/*  */}
        </div>
    );
};

