import React from "react";

export default function BusinessOwner()
{
    const width0={
        width:'100%'
    };

    return (
        <>
        <h2 className="text-center">Business Owner</h2>
    <div className="row">
        <div >
            <div className="row">
                <div></div>
                <div className="field button  " >
                    <input type="submit" value="Post Advertisements" style={width0} />
                </div>
                <div className="field button ">
                    
                    <input type="submit" value="Advertisements History" style={width0} />
                    
                </div>  
                <div></div>
            </div>
            <div className="row">
                <div ></div>
                <div className="field button  " >
                    <div className="row">
                        <a href="/InventoryAvailable">
                            Inventory
                        </a>
                    </div>
                    
                </div>
                <div className="field button ">
                    
                </div>  
                
            </div>
            <div className="row">
                <div ></div>
                <div className="field button  " >
                    <input type="submit" value="Transactions" style={width0} />
                </div>
                <div className="field button ">
                    
                </div>  
                
            </div>
        </div>
        
        <div className="chat">
            
            <div className="input button">
                <input type="submit" value="Chat with an expert" />

            </div> 
    </div>
    </div>
        </>
    )
}