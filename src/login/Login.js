import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

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
