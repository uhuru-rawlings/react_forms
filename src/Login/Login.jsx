import React ,{ useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    const username = useRef();
    const password = useRef();


    const validatLogin = (e) =>{
        e.preventDefault();
        if(username.current.value === "" || password.current.value === ""){
            if(username.current.value === ""){
                alert("please provide username");
            }else{
                alert("please provide password");
            }
        }
    }
  return (
    <div className='user_authentication'>
        <form action="" onSubmit={validatLogin} method="post" autoComplete='off'>
            <h2 className='text-center'>Login Form</h2>
            <p className='text-center'>Please fill the form and let's get you loged in</p>
            <div className="form-group">
                <input type="email" ref={ username } name="useremail" id="useremail" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" ref={ password } name="passwords" id="passwords" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary w-100 shadow-none" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <Link to={"/signup"}>Don't have account ?</Link>
                    </div>
                    <div className="col lefts">
                        <Link to={"/reset_password"}>Forgot password ?</Link>
                    </div>
                </div>
            </div>
            <p className="terms text-center">copyright &copy; 2022 Terms and conditions aply</p>
        </form>
    </div>
  )
}
