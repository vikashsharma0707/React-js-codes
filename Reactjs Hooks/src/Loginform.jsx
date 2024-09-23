





import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const login = {
      user,
      pass,
    };
    console.log(login);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>This is a Login form</h1>
        <div>
          <label>Enter name:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Enter password:</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Submit data</button>
      </form>
    </>
  );
};

export default Login;
