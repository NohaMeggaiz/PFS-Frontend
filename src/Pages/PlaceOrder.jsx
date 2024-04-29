import React , { useContext ,useState}from "react";
import { ShopContext } from "../Context/ShopContext";
import './CSS/PlaceOrder.css'

const PlaceOrder =()=>{

    const {getTotalCartAmount}=useContext(ShopContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
      });
      
      const onChangeHandler=(event)=>{
        const name =event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value}));
      }
    
      /*useEffect(()=>{
        console.log(data);

      },[data])*/

      /*const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        all_product.forEach((item) => {
            let itemInfo = { ...item, quantity: cartItems[item._id] };
            orderItems.push(itemInfo);
        });*/
      
    return (
    <form className="place-order"> 
   <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
            <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={data.firstName}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={data.lastName}
                onChange={onChangeHandler}
            />
        </div>
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={onChangeHandler}
        />
        <input
            type="text"
            name="street"
            placeholder="Street"
            value={data.street}
            onChange={onChangeHandler}
        />
        <div className="multifields">
            <input
                type="text"
                name="city"
                placeholder="City"
                value={data.city}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="state"
                placeholder="State"
                value={data.state}
                onChange={onChangeHandler}
            />
        </div>
        <div className="multifields">
            <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                value={data.zipcode}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="country"
                placeholder="Country"
                value={data.country}
                onChange={onChangeHandler}
            />
        </div>
        <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={onChangeHandler}
        />
    </div>

        <div className="placeorder-right">
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
            <button type="submit" >Proceed to Payment</button>
        </div>
            
        </div>

    </form>
    )
}
export default PlaceOrder