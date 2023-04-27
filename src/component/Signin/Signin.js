
import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import style from "./Signin.module.css";
import { signInWithGoogle } from "../../Atoms/firebase";
import { auth } from "../../Atoms/firebase";
import { useNavigate } from "react-router-dom";
function Signin() {
  const[user,setUser]=useState(null)
  const navigate=useNavigate()
  useEffect(()=>{
    auth.onAuthStateChanged(async (users)=>{
      console.log(users,'hello');
      setUser(users)
      navigate('/')
    })
  },[])
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={style.main}>
    
      <div className={style.board}>Board.</div>
      <div className={style.rightSide}>
        <div className={style.header}>
          <b>Sign In</b>
          <p>Sign in to your account</p>
        </div>
        <div className={style.btn}>
          <button onClick={signInWithGoogle}>
            <span style={{ fontSize: "18px" }}>
              <FcGoogle />
            </span>
            Sign in with Google
          </button>
          <button>
            <span style={{ fontSize: "18px" }}>
              <AiFillApple />
            </span>
            Sign in with Apple
          </button>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input />
          <label>Password</label>
          <input />
          <span>Forgot password ?</span>
          <button onClick={handleSubmit}>Sign In</button>
        </form>
        <p className={style.para}>
          {" "}
          Don't have an account?{" "}
          <span style={{ color: "#346BD4" }}>Register here</span>
        </p>
      </div>
    </div>
  );
}

export default Signin;