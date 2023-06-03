import React from "react";

import { useState } from "react";
// import "../login/";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const Register = () => {
  const [credentials, setCredentials] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  if (result) {
    console.log(result);
  }
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const registerHandle = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/auth/register", credentials);
      setResult(res);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login">
        <div className="lContainer">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="lInput"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            className="lInput"
            onChange={handleChange}
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="Country"
            id="country"
            className="lInput"
            onChange={handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="city"
            id="city"
            className="lInput"
            onChange={handleChange}
          />
          <label htmlFor="Phone">Phone</label>
          <input
            type="number"
            placeholder="phone"
            id="phone"
            className="lInput"
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            className="lInput"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="lButton"
            onClick={registerHandle}
          >
            Register
          </button>
          {/* {error && <span> {error.message}</span>} */}
        </div>
      </div>
    </>
  );
};

export default Register;
