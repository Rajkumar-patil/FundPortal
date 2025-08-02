import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginSignup.module.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleToggle = () => setIsSignup(!isSignup);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `${isSignup ? "Signup" : "Login"} Successful!\nName: ${
        formData.name
      }\nEmail: ${formData.email}`
    );

    navigate("/dashboard");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardBox}>
        <h3 className={styles.heading}>
          {isSignup ? "Create Account" : "Welcome Back!"}
        </h3>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-100 ${styles.submitBtn}`}
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center mt-3">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className={`btn btn-link p-0 ${styles.linkBtn}`}
            onClick={handleToggle}
          >
            {isSignup ? "Login here" : "Sign up here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
