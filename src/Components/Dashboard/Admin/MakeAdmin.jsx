import { useState } from "react";
import SideBar from "../Sidebar/Sidebar";

function MakeAdmin() {
  const [admin, setAdmin] = useState(null);

  const handleSubmit = (e) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Made Admin Successfully...!");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <SideBar />
      </div>
      <div className="col-md-5">
        <h1>Make Admin</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter the Email"
            className="form-control form-control-lg"
            onChange={(e) => setAdmin(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn btn-dark mt-3">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeAdmin;
