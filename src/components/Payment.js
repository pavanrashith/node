import React from "react";
export default function Payment()
{
    return (
        <>
        <h2 className="text-center">Payment</h2>
    <div className="row">
        <div className="full">
            <div className="row form">
                <div className=""></div>
                <form action="">
                <div className="field input  ">
                    
                    <label for="">Credit Card Number</label>
                    <input type="text" placeholder="12345xxxxxxx5" style={{width: '100%'}}/>
                   
                </div>
                <div className="field input">
                    <label for="">Card Holder Name</label>
                    <input type="text" placeholder="Name" style={{width: '100%'}}/>
                   
                </div>
                <div>
                <div className="field input">
                    <label for="">Expiry</label>
                    <div >
                        <input type="text" placeholder="01" style={{width: '10%'}}/>
                        <input type="text" placeholder="28" style={{width: '10%'}}/>
                    
                        <label for="">Cvv</label>
                    
                        <input type="text" placeholder="01" style={{width: '20%'}}/>
                        
                    </div>
                </div>
            </div>
                <div className="field button ">
                    <div className="row">
                        <a href="/Payment_success">Pay</a>
                    </div>
                    
                </div>  
            </form>
                <div></div>
            </div>
            
        </div>
       
    </div>
        </>
    )
}