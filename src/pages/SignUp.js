import React, { useState } from "react";

function SignUp() {
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
    <main>
      <h1></h1>
      <form>
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <button></button>
        <p></p>
      </form>
    </main>
  );
}

export default SignUp;
