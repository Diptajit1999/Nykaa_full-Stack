import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    let obj = { email, password };
    try {
      let res = await fetch("https://nykaa-plhq.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      res = await res.json();
      alert("Login successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={buttonStyle} type="submit" value={"Login"} />
      </form>
    </>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "auto",
};

const inputStyle = {
  margin: "8px 0",
  padding: "8px",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#2196F3",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Login;
