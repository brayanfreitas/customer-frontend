import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dash</span>
      </div>
      <div className="icons">
        <div className="user">
          <img
            src=""
            alt=""
          />
          <span>Brayan</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
