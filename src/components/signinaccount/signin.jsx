import React, { useState, useEffect } from "react";
import profileimg from "../../assets/images/profile.jpeg";
import "./signin.css";

const Signin = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [errorValues, setErrorValues] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValues(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email required";
    } else if (regex.test(values.email)) {
      errors.email = "invalid email format";
    }
    if (!values.password) {
      errors.password = "password required";
    } else if (values.password.length < 8) {
      errors.password = "password must be more than 8 characters";
    } else if (values.password.length > 16) {
      errors.password = "password must be less than 16 characters";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(errorValues).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [errorValues]);

  return (
    <div className="signin_main">
      <img src={profileimg} alt="profile" />
      <div className="account">
        <h4>SIGNIN TO YOUR ACCOUNT</h4>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Enter E-mail"
            required
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{errorValues.email}</p>
          <input
            type="password"
            placeholder="Enter Password"
            required
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{errorValues.password}</p>
          <button>Login</button>
        </form>
        {Object.keys(errorValues).length === 0 && submitting && (
          <span className="login-msg">Login Successfully</span>
        )}
      </div>
    </div>
  );
};
export default Signin;
