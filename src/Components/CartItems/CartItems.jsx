import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';



const CartItems =()=>{

   const {all_product,cartItems,RemoveFromCart,getTotalCartAmount}=useContext(ShopContext);

    return (
    <div className="CartItems">
        <div className="CartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr></hr>
       {all_product.map ((e)=>{
        if(cartItems[e.id]>0){
            return  <div>
            <div className="CartItems-format CartItems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="CartItems-quantity" >{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img  className="rmv-icon" src={remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt="" />

            </div>
            <hr></hr>
        </div>

        }
        return null;

       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>

                </div>
                <hr />
                <div className="cartitems-total-item">
                   <h3>Total</h3>
                   <h3>${getTotalCartAmount()}</h3>

                </div>


            </div>
            <button>Proceed to checkout</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-prombox">
                <input type="text" placeholder="promo code" ></input>
                 <button>Submit</button>
            </div>

        </div>

       </div>

    </div>
    )
}
export default CartItems