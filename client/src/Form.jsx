import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/new", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handler}>
      <h2>Sign in</h2>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        autoComplete="off"
      />
      <button type="submit" id="submit">
        Sign in
      </button>
    </form>
  );
};

export default Form;
