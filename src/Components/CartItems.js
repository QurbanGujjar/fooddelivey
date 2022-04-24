import { AddRounded, RemoveRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cartItems = [];
let cartList = [];

function CartItems({ name, imgSrc, price, itemId, Pqty }) {
  const [{ cart }, dispatch] = useStateValue();
  const [qty, setQty] = useState(1);

  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      //Find index of specific object using findIndex method.
      let objIndex = cartItems.findIndex((obj) => obj.id == id);
      cartItems[objIndex].pqty = qty + 1;

    //   console.log(cartItems);
    } else {
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }

      setQty(qty - 1);
      //Find index of specific object using findIndex method.
      let objIndex = cartItems.findIndex((obj) => obj.id == id);
      cartItems[objIndex].pqty = qty - 1;
    }
  };
  return (
    <div className='cartItem'>
      <div className='imgBox'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='itemSection'>
        <h2 className='itemName'>{name}</h2>
        <div className='itemQuantity'>
          <span>x {qty}</span>
          <div className='quantity'>
            <RemoveRounded
              className='itemRemove'
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className='itemAdd'
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className='itemPrice'>
        <span className='dolorSign'>$</span>
        <span className='itemPriceValue'>{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItems;

{
  /* <img  alt="" />
{name}<br/>{qty}<br/>{price} */
}
