import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./AddRent.css";

const AddRent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <div>
                        <h3 className="my-4 mx-5">Add Rent</h3>
                        <div
                            className="bg-light py-2 rounded "
                            style={{ height: "89vh" }}
                        >
                            <form>
                                <div
                                    className="row    p-4 mx-5 mt-5 bg-white "
                                    style={{ borderRadius: "15px" }}
                                >
                                    <div className="col-xl-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                Title
                                    </label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control "
                                                placeholder="Enter title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                Location
                                    </label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control "
                                                placeholder="Enter title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                No of Bathroom
                                    </label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control "
                                                placeholder="Enter title"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-5 col-sm-12 offset-md-1 ">
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                Price
                                    </label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control "
                                                placeholder="Enter title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold">
                                                No of Bedroom
                                    </label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control "
                                                placeholder="Enter title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <p className="font-weight-bold mb-2">
                                                Thumbnail
                                    </p>
                                            <label className="upload-btn">
                                                <input
                                                    type="file"
                                                    className="form-control-file"
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
                                <button
                                    className="btn btn-success submit-btn offset-md-10  my-3"
                                    type="submit"
                                >
                                    Submit
                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRent;