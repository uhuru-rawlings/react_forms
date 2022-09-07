import React,{ useRef } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    const username = useRef();
    const useremail = useRef();
    const passwords = useRef();
    const passwordagain = useRef();

    const validateSignup = (e) => {
        e.preventDefault();
        if(username.current.value === "" || useremail.current.value === "" || passwords.current.value === ""){
            if(username.current.value === ""){
                alert("please provide username to continue");
            }else if(useremail.current.value === ""){
                alert("please provide email adresss to continue");
            }else{
                alert("please provide password to continue");
            }
        }else{
            if(passwords.current.value !== passwordagain.current.value){
                alert("password do not match please confirm password.");
            }
        }
    }
  return (
    <div className='user_authentication'>
        <form action="" onSubmit={ validateSignup } method="post" autoComplete='off'>
            <h2 className='text-center'>Reset Password</h2>
            <p className='text-center'>Please fill the form to reset password.</p>
            <div className="form-group">
                <input type="text" ref={ username } name="username" id="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="email" ref={ useremail } name="useremail" id="useremail" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" ref={ passwords } name="passwords" id="passwords" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" ref={ passwordagain } name="passwordagain" id="passwordagain" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <input type="submit" value="Signup" className="btn btn-primary w-100 shadow-none" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <Link to={"/"}>Have account ?</Link>
                    </div>
                </div>
            </div>
            <p className="terms text-center">copyright &copy; 2022 Terms and conditions aply</p>
        </form>
    </div>
  )
}
