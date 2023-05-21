import React, { useEffect, useState } from "react";
import BannerCommon from "../components/BannerCommon";
import { HashLink } from "react-router-hash-link";
import dynamicAppTitle from "../js/dynamicAppTitle";

const AllToys = () => {
  dynamicAppTitle("All Toys");
  const [allToys, setAllToys] = useState(null);
  const [tempFilter, setTempFilter] = useState(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchName = e.target.text.value;

    const result = allToys.filter((item) => {
      console.log(item.name.toLowerCase());
      return item.name.toLowerCase().includes(searchName);
    });

    setTempFilter(result);
    // console.log(allToys, result);
  };

  useEffect(() => {
    fetch("https://robotopia-server.vercel.app/alltoys")
      .then((result) => result.json())
      .then((data) => {
        setAllToys(data);
        setTempFilter(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <BannerCommon pageName="All Toys"></BannerCommon>

      <div className="tabular container mx-auto">
        <form onSubmit={searchHandler}>
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
        </form>

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
            <tbody>
              {allToys &&
                tempFilter.map((el, indx) => (
                  <tr key={indx} className="rounded">
                    <td>{el.sellerName}</td>
                    <td>{el.name}</td>
                    <td>{el.subCategory}</td>
                    <td>{el.price}$</td>
                    <td>{el.availableQuantity}</td>
                    <td>
                      <HashLink to={`/toy-details/${el._id}#top`}>
                        <button className="theme-button px-3 rounded border-0">
                          View Details
                        </button>
                      </HashLink>
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

export default AllToys;
