import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import "./NavigationBarComponent.css"; // Import CSS file for styling

function NavigationBarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sneakers">Sneakers</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBarComponent;
