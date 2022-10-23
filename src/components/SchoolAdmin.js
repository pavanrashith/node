import React from "react";
export default function SchoolAdmin()
{
    return (
        <>
        <div className="row">
        <div className="">
            <div className="row">
                <div className="field button">
                    
                </div>
                <div className="field button  ">
                    <p className="text-center ">Students</p>
                    <div className="row"> 
                        <a href="/StudentOrder" className="full">Order History</a>
                        
                    </div>
                <div className="row">
                    <a href="StudentPost" className="full">Posts</a>
                </div>
                <div className="row">
                    <a href="Student_club" className="full">Clubs</a>
                </div>
                    
            </div>
                <div className="field button ">
                    <p className="text-center">Business Owners</p>
                
                    <input type="submit" value="Advertisements" style={{width: '100%'}}/><br/>
                    <input type="submit" value="Payment  History" style={{width: '100%'}} />
                </div>  
               <div></div> 
            </div>
            
        </div>
        
        
    </div>
        </>
    )
}