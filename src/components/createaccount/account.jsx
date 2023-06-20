import React, { useState, useEffect } from "react";
import profileimg from "../../assets/images/profile.jpeg";
import "./account.css";
const Account = () => {
  const initialValue = {
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
    confirmpassword: "",
    dob: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "name required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "name must be more than 3 characters";
    }
    if (!values.lastname) {
      errors.lastname = "name required";
    } else if (values.lastname < 3) {
      errors.lastname = "name must be more than 3 characters";
    }

    if (!values.mail) {
      errors.mail = "mail required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "invalid mail format";
    }
    if (!values.password) {
      errors.password = "password required";
    } else if (values.password.length < 8) {
      errors.password = "password must be more than 8 characters";
    } else if (values.password.length > 16) {
      errors.password = "password must be less than 16 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "confirm password";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "password does not match";
    }
    if (!values.dob) {
      errors.dob = "dob required";
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [errors]);
  return (
    <div className="account_main">
      <div className="photo">
        <img src={profileimg} alt="image" />
      </div>
      <div className="details">
        <h4>CREATE NEW ACCOUNT</h4>

        <form onSubmit={handleSubmit} noValidate>
          <div className="full_name">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              value={formValues.firstname}
              onChange={handleChange}
            />
            <p>{errors.firstname}</p>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              value={formValues.lastname}
              onChange={handleChange}
            />
            <p>{errors.lastname}</p>
          </div>
          <input
            type="email"
            name="mail"
            placeholder="Enter your email address"
            required
            value={formValues.mail}
            onChange={handleChange}
          />
          <p>{errors.mail}</p>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{errors.password}</p>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Re-enter password"
              required
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
            <p>{errors.confirmpassword}</p>
          </div>
          <input
            type="date"
            name="dob"
            required
            value={formValues.dob}
            onChange={handleChange}
          />
          <p>{errors.dob}</p>
          <div className="gender">
            <label>Gender</label>
            <div className="gend1">
              <input type="radio" name="female" required />
              <label>Female</label>
            </div>
            <div className="gend2">
              <input type="radio" name="female" required />
              <label>Male</label>
            </div>
            <div className="gend3">
              <input type="radio" name="female" required />
              <label>Custom</label>
            </div>
          </div>
          <button>Create Account</button>
        </form>
        {Object.keys(errors).length === 0 && submitting && (
          <span className="success-msg">Registered Successfully</span>
        )}
      </div>
    </div>
  );
};
export default Account;
