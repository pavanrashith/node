import React  from "react"
export default function Student_club()
{
    const newstyle={
        fontWeight:'bold',
        
        fontFamily: 'sans-serif'
    }
    const fonts={
        fontFamily: 'sans-serif',
        fontSize:'150%'
    }
    return (
        <>
    <div>
        <h3 className="header text-center">Select any club to join or leave the club</h3>
    
    </div>
            <div className="row">
                <div className="field button">
                    <img src="international.jpg" className="logo"  alt="" />
                    <input type="submit" className="full" value="International" />
                    
                </div>
                <div className="field button">
                    <img src="uta marketplace.jpg" className="logo"  alt=""/>
                    <input type="submit" className="full" value="UTA Marketplace" />
                    
                </div>
                <div className="field button">
                    <img src="mavericks.png" className="logo"  alt=""/>
                    <input type="submit"  className="full" value="Mavericks" />

                </div>
            
        
        
        
    </div>
    <div className="row">
        <div></div>
        
        <div className="button">
            <input type="submit" className="full" value="Join now" />
            <input type="submit" className="full" value="Leave" />
        </div>
        <div></div>
        </div>
        <div className="row">
            <div className="one-fourth">
            </div>
                <div className="box">
                    <div className="form login">
                    <form action="">
                            <h4 className="text-center header">Want to add a club?</h4>
                        <div className="field input">
                            <input type="text" name="id" placeholder="Enter Club name" />
                        </div>
                        <div className="field button">
                            <div className="row"> 
                                <a href="/Student_club" style={{marginRight:'10px',paddingLeft:'0px'}}>Add Now</a>
                            </div>
                           
                        </div>
                    </form>
                    </div>
                </div>
                
                    <div className="box" style={{marginLeft:'5px'}}>
                        <div className="form login">
                        <form action="">
                                <h4 className="text-center header">Want to delete a club?</h4>
                            <div className="field input">
                                <input type="text" name="id" placeholder="Enter Club name" />
                            </div>
                            <div className="field button">
                                <div className="row"> 
                                    <a href="/Student_club" style={{marginRight:'10px',paddingLeft:'0px'}}>Delete Club</a>
                                
                                </div>
                               
                            </div>
                        </form>
                        </div>
                    </div>
                    
                    <div>
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