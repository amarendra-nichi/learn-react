import React, { Component } from "react";
import axios from "axios";

export default function Home() {
  const [tableData, setTableData] = React.useState([]);
  let [userData, setuserData] = React.useState(null);
  let [showUser, setShowUser] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data, "get");
        setTableData(res.data.data);
      })
      .catch();
  }, []);

  function deleteItem(id) {
    console.log(id, "delete");
  }
  function GetSingleUser(id) {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res.data.data, "get");
        setuserData(res.data.data);
        setShowUser(true);
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <>
        <div className="card w-25">
          <img
            className="card-img-top"
            src={userData.avatar}
            alt="Card image cap"
            height="250"
          />
          <div className="card-body">
            <h5 className="card-title">
              {userData.first_name} {userData.last_name}
            </h5>
            <p className="card-text">
              user details for {userData.first_name} {userData.last_name}
              {userData.avatar}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> {userData.email}</li>
          </ul>
        </div>
      </>
    );
  }
  function GetTable() {
    let x = tableData.map((x, index) => {
      return (
        <tr key={index}>
          <td>
            {x.first_name} {x.last_name}
          </td>
          <td>{x.email}</td>
          <td>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteItem(x.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => GetSingleUser(x.id)}
            >
              Deatail
            </button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{x}</tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <div className="Container vh-100">
        <div className="row">
          <div className="col-md-12 justify-content-center align-items-center">
            <h3>User {showUser ? "Details" : "List"}</h3>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex justify-content-center">
            {showUser ? <GetSingleUser /> : <GetTable />}
          </div>
        </div>
      </div>
    </>
  );
}
