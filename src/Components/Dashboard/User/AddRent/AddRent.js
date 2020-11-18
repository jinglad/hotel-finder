import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { bookingsContext, userContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import "./AddRent.scss";

const AddRent = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // eslint-disable-next-line no-unused-vars
  const [orders, setOrders] = useContext(bookingsContext);
  console.log(orders);

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  let history = useHistory();

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    // const icon = `data:image/jpeg;base64,${houseRentItem.image.img}`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", loggedInUser.name);
    formData.append("email", loggedInUser.email);
    formData.append("title", orders.title);
    formData.append("price", orders.price);
    formData.append("location",orders.location);
    formData.append("bathroom",orders.bathroom);
    formData.append("bedroom",orders.bedroom);

    fetch("https://scintillating-rustic-egret.glitch.me/postOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert(
            "Your order is submitted...!..check your service list...Thank you...!"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
      history.push('/my-rent');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-5">
          <div>
            <h3 className="my-4 mx-5">Add Rent</h3>
            <div className="bg-light py-2 rounded " style={{ height: "89vh" }}>
              <form onSubmit={handleSubmit}>
                <div
                  className="row    p-4 mx-5 mt-5 bg-white "
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-xl-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                      <label className="font-weight-bold">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control "
                        placeholder="Enter title"
                        onBlur={handleBlur}
                        value={orders.title}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control "
                        placeholder="Enter title"
                        onBlur={handleBlur}
                        value={orders.location}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">No of Bathroom</label>
                      <input
                        type="text"
                        name="bathroom"
                        className="form-control "
                        placeholder="Enter title"
                        onBlur={handleBlur}
                        value={orders.bathroom}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-5 col-sm-12 offset-md-1 ">
                    <div className="form-group">
                      <label className="font-weight-bold">Price</label>
                      <input
                        type="text"
                        name="price"
                        className="form-control "
                        placeholder="Enter price"
                        onBlur={handleBlur}
                        value={orders.price}
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">No of Bedroom</label>
                      <input
                        type="text"
                        name="bedroom"
                        className="form-control "
                        placeholder="Enter title"
                        onBlur={handleBlur}
                        value={orders.bedroom}
                      />
                    </div>
                    <div className="form-group">
                      <p className="font-weight-bold mb-2">Thumbnail</p>
                      <label className="upload-btn">
                        <input
                          name="img"
                          type="file"
                          className="form-control-file"
                          onChange={handleFileChange}
                        />
                        <FontAwesomeIcon
                          icon={faCloudUploadAlt}
                          className="mr-2"
                        />
                        Upload Image
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  className="btn btn-success submit-btn offset-md-10  my-3"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRent;
