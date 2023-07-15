import "./NavBar.css";

import MenuPositions from "../MenuPositions/MenuPositions";
import { Link } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
          </Link>
          <MenuPositions />
        <Link className="li" to="/QuienesSomos">
          Quienes Somos
        </Link>
        <Link className="li" to="/contacto">
          Contacto
        </Link>
        

        <Link className="li" to="/shop">
        <ShoppingCartIcon />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
