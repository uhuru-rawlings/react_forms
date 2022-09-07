import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const Reset = () => {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setCPassword] = useState("");

    const getUsername = (username) =>{
        setUser(username);
    }
    const getPassword = (password) =>{
        setPassword(password);
    }
    const getConfirmPassword = (confirmpassword) =>{
        setCPassword(confirmpassword);
    }

    const validateResetPassword = (e) =>{
        e.preventDefault();
        if(username === "" || password === "" || confirmpassword === ""){
            if(username === ""){
                alert("please provide your email adress");
            }else if(password === ""){
                alert("please provide your password");
            }else{
                alert("please confirm your password");
            }
        }else{
            if(password !== confirmpassword){
                alert("password provided dont match");
            }
        }
    }
  return (
    <div className='user_authentication'>
        <form action="" onSubmit={ validateResetPassword } method="post" autoComplete='off'>
            <h2 className='text-center'>Reset Password</h2>
            <p className='text-center'>Please fill the form to reset password.</p>
            <div className="form-group">
                <input type="email" onChange={e => getUsername(e.target.value) } name="useremail" id="useremail" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" onChange={e => getPassword(e.target.value) } name="passwords" id="passwords" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" onChange={e => getConfirmPassword(e.target.value) } name="passwordagain" id="passwordagain" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <input type="submit" value="Reset Password" className="btn btn-primary w-100 shadow-none" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <Link to={"/signup"}>Don't have account ?</Link>
                    </div>
                    <div className="col lefts">
                        <Link to={"/"}>Back to Login</Link>
                    </div>
                </div>
            </div>
            <p className="terms text-center">copyright &copy; 2022 Terms and conditions aply</p>
        </form>
    </div>
  )
}
