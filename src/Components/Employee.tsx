import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Employee = () => {
  const navigate = useNavigate();

  const goDetails = (
    code: string,
    name: string,
    gender: string,
    annualSalary: number,
    dateOfBirth: string
  ) => {
    navigate(
      `/details/${code}?name=${name}&gender=${gender}&annualSalary=${annualSalary}&dateOfBirth=${dateOfBirth}`
    );
  };

  let employees = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      annualSalary: 5500,
      dateOfBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      annualSalary: 6700,
      dateOfBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      annualSalary: 8900,
      dateOfBirth: "27/11/1980",
    },
    {
      code: "e004",
      name: "Kaveri",
      gender: "Female",
      annualSalary: 9000,
      dateOfBirth: "9/6/1991",
    },
  ];

  return (
    <div className="container bg-light py-4">
      <h2 className="text-center mb-4">Employee Details</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>DOB</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.code}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.annualSalary}</td>
              <td>{employee.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    goDetails(
                      employee.code,
                      employee.name,
                      employee.gender,
                      employee.annualSalary,
                      employee.dateOfBirth
                    )
                  }
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate("/user/")}>
        Add User
      </button>
    </div>
  );
};

export default Employee;
