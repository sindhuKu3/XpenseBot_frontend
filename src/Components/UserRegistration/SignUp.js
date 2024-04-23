import { useState } from "react";
import "./userstyles.css";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import axios from "axios";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://xpense-bot-backend.vercel.app/api/users/signup",
      data: {
        fullName,
        email,
        password,
      },
    };
    axios(configuration).then((result) => {
      if (result.data === "fail") {
        setErrorMessage(true);
      } else {
        setSignUp(true);
        setErrorMessage(false);
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="SignUp">
        {signup ? (
          <Profile />
        ) : (
          <form
            action="/users/signup"
            onSubmit={(e) => handleSubmit(e)}
            method="post"
            className="fm"
          >
            <h1>SignUp</h1>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                unsuccessfull signup
              </div>
            )}

            <div className="mb-3 ">
              <label className="form-label">fullName</label>
              <input
                type="fullName"
                className="form-control"
                value={fullName}
                id="fullName"
                name={"fullName"}
                autocomplete="off"
                onChange={(e) => {
                  console.log(e);
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name={"email"}
                value={email}
                className="form-control"
                id="Email"
                autocomplete="off"
                aria-describedby="email"
                onChange={(e) => {
                  console.log(e);
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name={"password"}
                value={password}
                className="form-control"
                id="password"
                autocomplete="off"
                onChange={(e) => {
                  console.log(e);
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              SIGNUP
            </button>
            <p>OR</p>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                navigate("/signin");
              }}
            >
              SIGNIN
            </button>
          </form>
        )}
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
