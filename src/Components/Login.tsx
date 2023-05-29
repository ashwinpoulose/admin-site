import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import DashBoard from "./Dashboard";

const Login = () => {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("Username or password cannot be blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      setShowAlert(true);
    }
  };

  const handleReset = () => {
    setUname("");
    setPwd("");
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="container">
      {showAlert && (
        <div className="alert alert-danger alert-dismissible" role="alert">
          Login not successful. Please try again.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertClose}
          ></button>
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="t1" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="t1"
                    className="form-control"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="t2" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="t2"
                    className="form-control"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={doLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
