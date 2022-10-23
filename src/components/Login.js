import React from "react"
export default function Login()
{
    return (
        <>
<div className="row">
    <div className=""></div>
    <div className="">
        <div className="box">
            <div className="form login">
            <form action="">
                <h4 className="text-center header">Login Form</h4>
                <div className="field input">
                    <label for="">ID</label>
                    <input type="text" name="id" placeholder="ID" />
                </div>
                <div className="field input">
                    <label for="">Password</label>
                    <input type="password" name="username" placeholder="*****" />
                </div>
                <div className="field button">
                    <a className="button" href="./student-profile">Login</a>
                    

                </div>
                <div className="pass_link">Forgot password? <a href="./forgotpass">Click to reset your password</a></div>
                <div className="signup_link"> New User?  <a href="./Register">SignUp</a>
                </div>    
            </form>
            </div>
        </div>
    </div>
    <div></div>
    
</div>
</>
 )
 }