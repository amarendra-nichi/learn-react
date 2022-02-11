import React, { useCallback, useState } from "react";
import axios from "axios";
import { TablePagination } from 'react-pagination-table';
import * as IoIcons from 'react-icons/io';
import Loader, { Rings, Triangle } from "react-loader-spinner";

export default function Home() {
  const [tableData, setTableData] = React.useState([]);
  let [userData, setuserData] = React.useState(null);
  // let [showUser, setShowUser] = React.useState(false);
  const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);

    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
  };

  let [showUser, setShowUser] = useToggle();
  console.log("what is it? ", showUser, "fn", setShowUser);

  React.useEffect(() => {
    // axios
    //   .get("https://reqres.in/api/users?page=2")
    //   .then((res) => {
    //     console.log(res.data.data, "get");
    //     setTableData(res.data.data);
    //   })
    //   .catch();

    axios
      .post("http://119.82.96.67:3300/api/member/list", {
        paginate: true,
        limit: 500,
        offset: 0,
        sort: [{ key: "id", value: "desc" }],
      })
      .then((res) => {
        console.log(res.data.data, "get");
        setTableData(res.data.data.users);
      })
      .catch();
  }, []);

  function getUserData(id) {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res.data.data, "get");
        setuserData(res.data.data);
        setShowUser();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function deleteItem(id) {
    console.log(id, "delete");
  }
  function GetSingleUser(id) {
    return (
      <>
        <div className="card w-25">
          <img
            className="card-img-top"
            src={userData.avatar}
            height="250"
            alt=""
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
            <li className="list-group-item">
              <button className="btn btn-secondary" onClick={setShowUser}>
                back to User List
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }
  function GetTable({ handleDelete }) {
    const Header = ["Name", "Email", "Status","Type"];
    let x = tableData.map((x, index) => {
      return (
        <tr key={index}>
          <td>{x.fullname_en}</td>
          <td>{x.email}</td>
          <td>{x.status}</td>
          <td>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteItem(x.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => getUserData(x.id)}
            >
              Deatail
            </button>
          </td>
        </tr>
      );
    });
    return (
      // <>
      //   <table className="table">
      //     <thead>
      //       <tr>
      //         <th>Name</th>
      //         <th>Email</th>
      //         <th>Status</th>
      //         <th>Action</th>
      //       </tr>
      //     </thead>

      //     <tbody>{x}</tbody>
      //   </table>
      // </>
        <TablePagination
            headers={ Header }
            data={ tableData }
            columns="fullname_en.email.status.name_en"
            perPageItemCount={ 10 }
            totalCount={ tableData.length }
            className="col-12 table table-bordered  table-striped"
            item="d-flex"
            paginationClassName="d-flex justify-content-end align-items-center list-unstyled px-1 py-1 "
            // arrayOption={ [["size", 'all', ' ']] }
        />
    );
  }

  return (
    <>
    <div>
        <div class="row pb-3">
      <div className="col">
        <div class="d-flex align-items-center h4 mb-0">
        <span><IoIcons.IoMdPeople className="" /></span><span className="ml-1"> <label >USERLIST</label></span>
        </div>
      </div>
    </div>
    <hr class="my-0 ml-3" />
        </div>
      <div className="Container py-3">
        {/* <div className="row">
          <div className="col-md-12 justify-content-center align-items-center">
            <h3>User {showUser ? "Details" : "List"}</h3>
          </div>
        </div> */}
        {tableData.length<=0?
        <div className="loader d-flex justify-content-center">
          <Triangle
    heigth="100"
    width="100"
    color='red'
    ariaLabel='loading'
  />
        </div>:
        <div className="row">
          <div className=" d-flex col-md-12 justify-content-center ">
            {showUser ? <GetSingleUser /> : <GetTable />}
          </div>
        </div>
}
      </div>
    </>
  );
}
