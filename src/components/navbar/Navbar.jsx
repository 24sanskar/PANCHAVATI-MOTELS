import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">PANCHAVATI MOTELS</span>
        <div className="navItems">
          <button className="navButton" onClick={handleSearch}>
            Register
          </button>
          <button className="navButton" onClick={handleSearch}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
