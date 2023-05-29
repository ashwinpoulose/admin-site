import React, { useState } from "react";

const Users = () => {
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userType, setUserType] = useState("");

  const handleSave = () => {
    // Perform the saving logic here
    // For example, you can console.log the values for now
    console.log("Username:", username);
    console.log("CompanyName:", companyName);
    console.log("UserType:", userType);

    // Reset the input fields
    setUsername("");
    setCompanyName("");
    setUserType("");
  };

  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0 font-weight-bold">ADD USER DETAILS</h5>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm"
            >
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
              CompanyName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="colFormLabel"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <label
              htmlFor="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              UserType
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
