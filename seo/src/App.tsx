import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import './App.css';
import Navuser from "./components/Navuser";

export default function App() {
  return (
    <>
      <header>
        <nav className="container">
          <Link to="/"><h1>DSDemo</h1></Link>
          <ul className="navmenu-items">
            <li>
              <NavLink
                className={({ isActive }) => isActive ? "navmenu-active" : ""}
                to="/sales">Vendas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive ? "navmenu-active" : ""}
                to="/products">Produtos
              </NavLink>
            </li>
          </ul>
          <Navuser />
        </nav>
      </header>
      <Outlet />
    </>
  )
}
