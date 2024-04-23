
import "./navbarstyles.css" ;
const NavBar = ({ isLogin }) => {
  return (
    <div className="NavBar">
      <a href="/">XpenseBot</a>
      {isLogin && (
        <>
         
          <a href="/signin">Logout</a>
        </>
      )}
    </div>
  );
};

export default NavBar;
