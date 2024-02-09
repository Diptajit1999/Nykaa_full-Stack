import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  async function handleSubmit() {
    let obj = { username, email, password, avatar };
    try {
      let res = await fetch("https://nykaa-plhq.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      res = await res.json();
      alert("Signup successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          style={inputStyle}
          type="text"
          placeholder="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <input style={buttonStyle} type="submit" value={"Signup"} />
      </form>
    </>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "auto",
  marginTop:"100px",
};

const inputStyle = {
  margin: "8px 0",
  padding: "8px",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Signup;
