import React from "react";
import { useLocation, useParams } from "react-router-dom";
const Details = () => {
  let { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const gender = params.get("gender");
  const anualSalary = params.get("anualSalary");
  const dateofBirth = params.get("dateofBirth");

  let employess = {
    code: id,
    name: name,
    gender: gender,
    anualSalary: anualSalary,
    dateofBirth: dateofBirth,
  };
  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="mb-0">EMPLOYEE DETAILS</h1>
        </div>
        <div className="card-body">
          <p className="card-text">
            <strong>Code:</strong> {employess.code}
          </p>
          <p className="card-text">
            <strong>Name:</strong> {employess.name}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {employess.gender}
          </p>
          <p className="card-text">
            <strong>Annual Salary:</strong> {employess.anualSalary}
          </p>
          <p className="card-text">
            <strong>Date of Birth:</strong> {employess.dateofBirth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
