import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

function Login() {
  const [avatar, setAvatar] = useState<any>({
    file: null,
    url: "",
  });

  console.log(avatar)

  const handleAvatar = (e:any) => {
    console.log(e)
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = e =>{
    e.preventDefault()
    toast.warn("Hello")
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="sperator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
