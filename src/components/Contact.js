import React from "react";

export default function Contact(){
    return (
        <>
         <div className="row">
        <div className=""></div>
        <div className="">
            <div className="box">
                <div className="form login">
                <form action="">
                    <h4 className="text-center header">Enter the details and we will reach out to you soon</h4>
                    <div className="field input">
                        <label for="">First Name</label>
                        <input type="text" name="id" placeholder="ID" />
                    </div>
                    <div className="field input">
                        <label for="">Last Name</label>
                        <input type="text" name="id" placeholder="ID" />
                    </div>
                    <div className="field input">
                        <label for="">Contact Number</label>
                        <input type="password" name="number" placeholder="+19999999999" />
                    </div>
                    <div className="field input">
                        <label for="">Mailing Address</label>
                        <input type="text" name="email" placeholder="ID" />
                    </div>
                    <div className="field button">
                        <a className="button" href="/">Submit</a>
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