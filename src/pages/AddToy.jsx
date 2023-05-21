import React, { useContext } from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";
import BannerCommon from "../components/BannerCommon.jsx";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
  dynamicAppTitle("Add a Toy");

  const { loading, user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user.email);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const name = form.name.value;
    const sellername = user.displayName;
    const selleremail = user.email;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      img: img,
      name: name,
      sellerName: sellername,
      sellerEmail: selleremail,
      subCategory: subcategory,
      price: price,
      rating: rating,
      availableQuantity: quantity,
      detailDescription: description,
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged === true) {
          toast.info("Toy added Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate(`/toy-details/${data.insertedId}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <BannerCommon pageName="Add a Toy"></BannerCommon>

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
                    placeholder={user.displayName}
                    disabled
                  />
                  <label htmlFor="floatingSellerName">{user.displayName}</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="email"
                    name="selleremail"
                    className="form-control"
                    id="floatingSellerEmail"
                    placeholder={user.email}
                    disabled
                  />
                  <label htmlFor="floatingSellerEmail">{user.email}</label>
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
                    name="price"
                    className="form-control"
                    id="floatingPrice"
                    placeholder="Price"
                  />
                  <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="rating"
                    className="form-control"
                    id="floatingRating"
                    placeholder="Rating"
                  />
                  <label htmlFor="floatingRating">Rating</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    id="floatingQuantity"
                    placeholder="Available quantity"
                  />
                  <label htmlFor="floatingQuantity">Available quantity</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    id="floatingDescription"
                    placeholder="Description"
                  />
                  <label htmlFor="floatingName">Description</label>
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
      <ToastContainer />
    </div>
  );
};

export default AddToy;
