import React from "react";
export default function SuperAdmin()
{
    const styles={
        width: '100%'
    }
    return (
        <>
        <h2 className="text-center">Super Admin</h2>
    <div className="row">
        <div className="full">
            <div className="row">
                <div className=""></div>
                <div className="field button  ">
                    <p className="text-center ">Students</p>
                <div className="row">
                    <a href="/StudentOrder">Order History</a>
                </div>
                <div className="row">
                    <a href="/StudentPost">Posts</a>
                </div>
                <div className="row">
                    <a href="/Student_club">Clubs</a>

                </div>
                    
                </div>
                <div className="field button ">
                    <p className="text-center">School Admin</p>
                
                    <input type="submit" value="Advertisements" style={styles}/><br/>
                    <input type="submit" value="Payment  History" style={styles}/>
                </div>  
                <div className="field button ">
                    <p className="text-center">Business Owner</p>
                
                    <input type="submit" value="Advertisements" style={styles}/><br/>
                    <div className="row">
                        <a href="/InventoryAvailable">Inventory</a>
                    </div>
                    <input type="submit" value="Payment History" style={styles}/><br/>
                </div>
                <div></div>
                <div className="chat">
            
                    <div className="input button">
                        <input type="submit" value="Chat with a consumer"/>
        
                    </div>
            </div>
            
        </div>
        
        
    </div>
    </div>
        </>
    )
}