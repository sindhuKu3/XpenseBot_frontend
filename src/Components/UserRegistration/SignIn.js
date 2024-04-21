import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userstyles.css";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://xpense-bot-backend.vercel.app/api/users/signin",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Email or password is incorrect.");
      });
  };

  return (
    <div className="SignIn">
      <NavBar isLogin={login} />
      {login ? (
        <Profile />
      ) : (
        <form
          action="/users/signin"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          className="fm"
        >
          <h1>SignIn</h1>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <br />
            <input
              type="email"
              name={"email"}
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="Email"
              aria-describedby="email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name={"password"}
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              value={password}
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            style={{ width: "300px" }}
            className="SignButton btn btn-primary"
          >
            SIGNIN
          </button>
          <p style={{ textAlign: "center" }}>OR</p>
          <button
            type="submit"
            style={{ width: "300px" }}
            className="SignButton btn btn-primary "
            onClick={() => {
              navigate("/signup");
            }}
          >
            SIGNUP
          </button>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default SignIn;
