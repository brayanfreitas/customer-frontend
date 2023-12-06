import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Dash</span>
      </div>
      <div className="icons">
        <div className="user">
          <img
            src="https://seeklogo.com/images/P/pink-floyd-logo-CE6D13EDCA-seeklogo.com.png"
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
