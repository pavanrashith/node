import React from "react";
export default function Checkout()
{
    return (
        <>
        
        <div className="row">
            <div className="shop_inner_inf">
                <div className="privacy about">
                    <h3>Chec<span>kout</span></h3>
    
                    <div className="checkout-right">
                        <h4>Your shopping cart contains: <span>3 Products</span></h4>
                        <table className="timetable_sub">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Product Name</th>
    
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="rem1">
                                    <td className="invert">1</td>
                                    <td className="invert-image"><a href=""><img src="macbookpro.jpg" alt=" " className="item_image img-responsive" /></a></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">macbookpro</td>
    
                                    <td className="invert">$675.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close1">&times; </div>
                                            
                                        </div>
    
                                    </td>
                                </tr>
                                <tr className="rem2">
                                    <td className="invert">2</td>
                                    <td className="invert-image"><a href="#"><img src="iphone14pro.jpg" alt=" " className="img-responsive item_image"/></a></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Iphone 14 pro</td>
    
                                    <td className="invert">$325.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close2">&times; </div>
                                        </div>
    
                                    </td>
                                </tr>
                                <tr className="rem3">
                                    <td className="invert">3</td>
                                    <td className="invert-image"><a href="#"><img src="book.jpg" alt=" " className="img-responsive item_image"/></a></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">DAA 7th edition</td>
    
                                    <td className="invert">$405.00</td>
                                    <td>&times;</td>
                                </tr>
    
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
</div>
        

        <div className="row">
            <div className="row button">
                <a href="/Payment">Continue to Payment</a>

            </div>
        </div>
    
        </>
    )
}