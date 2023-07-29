import React, { useContext, useEffect, useState } from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";
import BannerCommon from "../components/BannerCommon";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  dynamicAppTitle("My Toys");

  const [myToys, setMyToys] = useState(null);
  const [emailState, setEmailState] = useState(null);
  const [deleteState, setDeleteState] = useState(null);

  const { user } = useContext(AuthContext);
  // console.log(user);
  // setEmailState(user?.email);

  useEffect(() => {
    fetch(
      `https://robotopia-server.vercel.app/mytoys?email=${user && user.email}`
    )
      .then((result) => result.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [user, deleteState]);

  const deleteToyHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`https://robotopia-server.vercel.app/mytoys?id=${id}`
        fetch(
          `http://localhost:5000/mytoys?id=${id}`,

          {
            method: "DELETE",
          }
        )
          .then((result) => result.json())
          .then((data) => {
            setDeleteState(data);
            console.log(data);
            Swal.fire(
              "Deleted!",
              `Your product with id ${id} is successfully deleted`,
              "success"
            );
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div>
      <BannerCommon pageName="My Toys"></BannerCommon>

      <div className="tabular container mx-auto">
        {/* <form onSubmit={searchHandler}>
          <div className="input-group my-5">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Search a toy"
              aria-label="Search a toy"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="theme-button p-3 rounded border-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form> */}

        <div className="table-responsive py-5">
          <table className="table">
            <thead>
              <tr>
                <th>Toy view</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys &&
                myToys.map((el, indx) => (
                  <tr key={indx} className="rounded">
                    <td>
                      <img src={el.img} className="img-40px" />
                    </td>
                    <td>{el.name}</td>
                    <td>{el.subCategory}</td>
                    <td>{el.price}$</td>
                    <td>{el.availableQuantity}</td>
                    <td>
                      <button className="theme-button px-3 rounded border-0 me-3">
                        Update
                      </button>
                      <button
                        className="theme-button red-bg px-3 rounded border-0"
                        onClick={() => deleteToyHandler(el._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
