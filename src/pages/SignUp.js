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
        <label></label>
        <input 
        type=""
        name=""
        id=""
        required
        value={}
        onChange={}
        />
        <label></label>
        <input 
        type=""
        name=""
        id=""
        required
        value={}
        onChange={}
        />
        <label></label>
        <input 
        type=""
        name=""
        id=""
        required
        value={}
        onChange={}
        />
        <label></label>
        <input 
        type=""
        name=""
        id=""
        required
        value={}
        onChange={}
        />
        <button>Submit</button>
        <p></p>
      </form>
    </main>
  );
}

export default SignUp;
