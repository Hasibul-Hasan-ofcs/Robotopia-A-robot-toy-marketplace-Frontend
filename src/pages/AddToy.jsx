import React from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";

const AddToy = () => {
  dynamicAppTitle("Add a Toy");
  return (
    <div>
      <BannerCommon pageName="Toy Details"></BannerCommon>

      <div className="container mx-auto py-5">
        <div className="details-box rounded-4 border p-3 mb-4">
          <div className="glass-box-toy-details d-flex align-items-center justify-content-center flex-column py-5">
            <form onSubmit={formSubmitHandler}>
              <div className="form-floating mb-3">
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
                  <h2 className="teko-font">Add Toy</h2>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
