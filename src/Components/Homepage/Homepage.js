
import NavBar from "../Navbar/Navbar";
import "./homepagestyles.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
    <NavBar/>
      <div
        className="Homepage"
        style={{
          width: "auto",
          height: "700px",
          backgroundSize: "cover",
          backgroundImage: "url(images/landingPageImg.jpg)",
          backgroundPosition: "center",
        }}
      >
        <p>"Effortlessly track and manage your expenses"</p>
        <div className="UserButton">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              navigate("/signin");
            }}
          >
            SignIn
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
