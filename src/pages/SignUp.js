import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  useEffect(() => {}, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, username, password, dob });
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setDob("");
  };

  return (
    <main className="signUp">
      <h1 className="SignUpTitle">Create an account</h1>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={Text}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="dob">DOB</label>
        <input
          type="text"
          name="dob"
          id="dob"
          required
          value={dob}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitButton">Submit</button>
        <p>
          Have an account?
          <Link to="/">Login here</Link>
        </p>
      </form>
    </main>
  );
}

export default SignUp;
