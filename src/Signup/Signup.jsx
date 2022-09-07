import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='user_authentication'>
        <form action="" method="post" autoComplete='off'>
            <h2 className='text-center'>Reset Password</h2>
            <p className='text-center'>Please fill the form to reset password.</p>
            <div className="form-group">
                <input type="text" name="username" id="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="email" name="useremail" id="useremail" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" name="passwords" id="passwords" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" name="passwordagain" id="passwordagain" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary w-100" />
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
