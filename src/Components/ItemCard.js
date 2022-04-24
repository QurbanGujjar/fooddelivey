import { AddRounded, Favorite, StarRounded } from "@material-ui/icons";
import React,{useState,useEffect} from "react";
import { Items } from "./Data";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cartData=[]

function ItemCard({ imgSrc, name, price, ratings,itemId }) {
    const [isFavourite,setFavourite]=useState(false)
    const [currentValue,setCurrentValue]=useState(ratings);
    const [isCart,setCart]=useState(null)
    const [{},dispatch]=useStateValue()
    useEffect(()=>{
      if(isCart){
        cartData.push(isCart)
        dispatch({
          type:actionType.SET_CART,
          cart:cartData
        })

      }

    },[isCart])
    const handleClick=(value)=>{
        setCurrentValue(value)
    }

  return (
    <div className='itemCard' id={itemId}>
      <div className={`isFavourite ${isFavourite ? "active":""}`}
      onClick={()=>setFavourite(!isFavourite)}>
        <Favorite />
      </div>
      <div className='imgBox'>
        <img src={imgSrc} alt='' className='itemImg' />
      </div>
      <div className='itemContent'>
        <h3>{name}</h3>
        <div className='bottom'>
          <div className='rattings'>
            {Array.apply(null, { length: ratings }).map((e, i) => (
              <i key={i} className={`rating  ${currentValue > i ? 'orange':'gray'}`}
              onClick={()=>handleClick(i+1)}>
                <StarRounded />
              </i>
            ))}
            <h3 className='price'>
              <span>$</span>
              {price}
            </h3>
          </div>
          <i className='addToCart' onClick={()=>setCart(Items.find(n=>n.id===itemId))}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
