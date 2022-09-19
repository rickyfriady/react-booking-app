import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="nav-logo">Alluky HotelBook</span>
        <div className="nav-items">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar