import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [userValue, setUSerValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState();

  const setUserData = (event) => {
    // event.preventDefault();
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setUSerValues({ ...userValue, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, password } = userValue;
    if (!name || !email || !password) {
      alert("Please Enter All Field");
      return;
    }

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, userValue.email, userValue.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: userValue.name,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          name="name"
          value={userValue.name}
          onChange={setUserData}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          name="email"
          value={userValue.email}
          onChange={setUserData}
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          name="password"
          value={userValue.password}
          onChange={setUserData}
        />

        <div className={styles.footer}>
          <b className={styles.error}></b>
          <button onClick={handleSubmit} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
