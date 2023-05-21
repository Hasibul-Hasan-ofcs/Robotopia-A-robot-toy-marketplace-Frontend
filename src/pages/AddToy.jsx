import React, { useContext } from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";
import BannerCommon from "../components/BannerCommon.jsx";
import { AuthContext } from "../providers/AuthProvider";

const AddToy = () => {
  dynamicAppTitle("Add a Toy");

  const { loading } = useContext(AuthContext);

  const formSubmitHandler = () => {};

  return (
    <div>
      <BannerCommon pageName="Toy Details"></BannerCommon>

      <div className="container mx-auto py-5">
        <div className="details-box rounded-4 border p-3 mb-4">
          <div className="glass-box-toy-details d-flex flex-column py-5">
            <form onSubmit={formSubmitHandler}>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 px-1 px-lg-2">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="img"
                    className="form-control"
                    id="floatingImg"
                    placeholder="Picture URL"
                  />
                  <label htmlFor="floatingImg">Picture URL</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="Toy Name"
                  />
                  <label htmlFor="floatingName">Toy Name</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="sellername"
                    className="form-control"
                    id="floatingSellerName"
                    placeholder="Seller name"
                    disabled
                  />
                  <label htmlFor="floatingSellerName">Seller name </label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="selleremail"
                    className="form-control"
                    id="floatingSellerEmail"
                    placeholder="Seller email"
                  />
                  <label htmlFor="floatingSellerEmail">Seller email</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="subcategory"
                    className="form-control"
                    id="floatingSubCategory"
                    placeholder="Sub-category"
                  />
                  <label htmlFor="floatingSubCategory">Sub-category</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="your name"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="your name"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="your name"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="floatingName"
                    placeholder="your name"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>

                <button
                  type="submit"
                  className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
                >
                  {loading ? (
                    <Spinner animation="border" variant="light" size="sm" />
                  ) : (
                    <h4 className="teko-font">Add Toy</h4>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
