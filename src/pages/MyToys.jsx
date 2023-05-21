import React, { useContext, useEffect, useState } from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";
import BannerCommon from "../components/BannerCommon";
import { AuthContext } from "../providers/AuthProvider";

const MyToys = () => {
  dynamicAppTitle("My Toys");

  const [myToys, setMyToys] = useState(null);
  const [emailState, setEmailState] = useState(null);

  const { user } = useContext(AuthContext);
  console.log(user);

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
  }, []);

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
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* <tbody>
              {allToys &&
                tempFilter.map((el, indx) => (
                  <tr key={indx} className="rounded">
                    <td>{el.sellerName}</td>
                    <td>{el.name}</td>
                    <td>{el.subCategory}</td>
                    <td>{el.price}$</td>
                    <td>{el.availableQuantity}</td>
                    <td>
                      <button className="theme-button px-3 rounded border-0">
                        Update
                      </button>
                      <button className="theme-button bg-danger px-3 rounded border-0">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
