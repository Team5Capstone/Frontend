import React, { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

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
