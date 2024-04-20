
import "./navbarstyles.css" ;
const NavBar = ({ isLogin }) => {
  return (
    <div className="NavBar">
      <a href="/">XpenseBot</a>
      {isLogin && (
        <>
          <a href="/profile">Profile</a>
          <a href="/logout">Logout</a>
        </>
      )}
    </div>
  );
};

export default NavBar;
