import React from "react"
export default function InventoryAvailable()
{
    return (
        <>
         <div className="row">
        <div className="one-thirds">
            <div className="row">
                <h2 className="">Inventory Available</h2>
            </div>
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Add</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Iphone 14 Pro</td>
                        <td>123 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>Mackbook 13 inch</td>
                        <td>253 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>USB Cable</td>
                        <td>512 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>Shirts</td>
                        <td>12 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>2 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>Bag</td>
                        <td>51 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                    <tr>
                        <td>Study Table</td>
                        <td>8 left</td>
                        <td className="add"><button className="button">Add Item</button></td>
                        <td className="delete"><button className="button">Delete Item</button></td>
                    </tr>
                </table>

            </div>
        </div>
        
    </div>
        </>
    )
}