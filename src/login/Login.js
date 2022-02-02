import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const [email, setEmail] = React.useState(null);
// const [password, setPassword] = React.useState(null);

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  let [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data, "get");
        setTableData(res.data.data);
        console.log(this.tableData, "asas");
      })
      .catch();
  }, []);
  function deleteItem(id) {
    console.log(id, "delete");
  }
  function GetTable() {
    let x = tableData.map((x) => {
      return (
        <tr>
          <td>
            {x.first_name} {x.last_name}
          </td>
          <td>{x.email}</td>
          <td onClick={() => deleteItem(x.id)}>Delete</td>
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
            </tr>
          </thead>

          <tbody>{x}</tbody>
        </table>
      </>
    );
  }
  function LoginSubmit() {
    axios
      .post(
        "https://reqres.in/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/home");
        //   alert("done");
      })
      .catch((err) => {
        alert("get it");
      });
  }
  return (
    <div className="container ">
      <div className="row">
        <GetTable />
      </div>
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-4 bg-primary py-3">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success btn-block mb-3"
              onClick={(e) => {
                e.preventDefault();
                LoginSubmit();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
