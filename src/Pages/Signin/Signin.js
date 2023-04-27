import React, { useEffect, useState } from 'react'
import style from './Signin.module.css'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
// import { auth,signInWithGoogle } from '../../FireBase/Firebase'
// // import { useNavigate } from 'react-router-dom'
// import { myAtom } from '../../Recoil/Atom'
// import { useRecoilState } from 'recoil'
function SignIn() {
  // const[user,setUser]=useRecoilState(myAtom)
  // console.log(user,'hii')
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   auth.onAuthStateChanged(async (users)=>{
  //     console.log(users,'hello');
  //     setUser(users)
  //     navigate('/')
  //   })
  // },[])
  function handleSubmit(e){
    e.preventDefault()
  }
  
  return (
    <div className={style.main}>
      <div className={style.left}>
        Board.
      </div>
      <div className={style.right}>
        <div className={style.head}>
        <p className={style.para1}>Sign In</p>
        <p className={style.para2}>Sign in to your account</p>
        </div>
        <div className={style.btncontainer} >
        <button className={style.btn}  ><FcGoogle style={{fontSize:'1rem'}}/>Sign in with Google</button>
        <button className={style.btn} ><sub><BsApple  style={{fontSize:'1rem'}}/></sub>Sign in with Apple</button>
        </div>
        <div className={style.forms}>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type='text'/>
          <label>Password</label>
          <input type='password'/>
        </form>
        <p className={style.para}>Forgot password?</p>
        <button className={style.loginbtn}>Sign In</button>
        </div>
        <p style={{fontFamily:'Lato'}}><span style={{color:'#858585'}}>Don't have an account?</span> <span style={{color:'#346BD4'}}>Register here</span></p>
      </div>
    </div>
  )
}

export default SignIn