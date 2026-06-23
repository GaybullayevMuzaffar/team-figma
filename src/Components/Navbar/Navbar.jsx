import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <header>
        <div>
          <h1>magnifico</h1>
        </div>
        <nav className="navbar">
          <a href="">Products</a>
          <a href="">Solutions</a>
          <a href="">Services</a>
          <a href="">Help Center</a>
          <a href="">Pricing</a>
        </nav>
        <div className="login-container">
          <h3>Log in</h3>
          <button className="login">Sign up free</button>
        </div>
      </header>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Navbar;
