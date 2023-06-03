import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CartButton from "../cart/CartButton.jsx";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>

        <div className="navItems">
          {user ? (
            <h3>{user.username}</h3>
          ) : (
            <>
              <Link to="/auth/register">
                <button className="navButton">Register</button>
              </Link>
              <button className="navButton">Login</button>
              <a href="localhost/3001">
                <button className="navButton">Admin</button>
              </a>
            </>
          )}
        </div>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
