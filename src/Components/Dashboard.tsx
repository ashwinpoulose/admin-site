import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };

  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Welcome {localStorage.getItem("uname")}</h2>
        {/* Add the rest of your dashboard content here */}
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Random</h3>
                <p className="card-text">
                  Launching a new business Dear [Client Name], We're excited to
                  announce the opening of our new business, [your company's
                  name]. It's located on [address of your business and other
                  location details.] The business will be open and ready to
                  greet guests on [date your business opens.] Our business
                  offers [brief overview of the value your business will provide
                  to customers.] We're proud to offer the following products to
                  clients: [List of product or service 1] [List of product or
                  service 2] [List of product or service 3] Please feel free to
                  stop by on [date your business opens] to learn more about our
                  products and meet our team. Give us a call or email us to
                  learn more about our products at [company phone number] or
                  [company email address.] Sincerely, [Your name] [Your title]
                  [Company's name]
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-right">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                <p className="card-text">
                  Display recent notifications or updates here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer bg-light mt-auto py-3">
          <div className="container text-center">
            <span className="text-muted">
              © 2023 ABC Company.<br></br>All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    );
  }
};

export default DashBoard;
