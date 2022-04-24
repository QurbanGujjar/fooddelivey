import { useEffect, useState } from "react";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
} from "@material-ui/icons";
import SaveIcon from "@material-ui/icons/Save";
import "./App.css";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItems from "./Components/CartItems";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((elemant) => elemant.itemId === "buger01")
  );
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu card Active Toggle
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
  }, [isMainData]);
  const setData = (itemId) => {
    setMainData(Items.filter((elemant) => elemant.itemId === itemId));
  };

  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* main Container */}
      <main>
        <div className='mainContainer'>
          <div className='banner'>
            <BannerName name={"Qurban"} discount={"20"} link={"#"} />
            <img
              src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337'
              alt=''
              className='deliveryPic'
            />
          </div>
          {/* dishContainer */}
          <div className='dishContainer'></div>
          <div className='menuCard'>
            <SubMenuContainer name='Menu Category' />
          </div>

          <div className='rowContainer'>
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />
                </div>
              ))}
          </div>

          <div className='dishItemContainer'>
            {isMainData &&
              isMainData.map((data) => (
                <ItemCard
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  price={data.price}
                  ratings={data.ratings}
                />
              ))}
          </div>
        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div></div>
          ) : (
            <div className='cartCheckOutContainer'>
              <div className='cartContainer'>
                <SubMenuContainer name='Cart Items' />
                <div className='cartItems'>
                  {cart &&
                    cart.map((data) => (
                      <CartItems
                      key={data.id}
                      itemId={data.id}
                        name={data.name}
                        price={data.price}
                        imgSrc={data.imgSrc}

                      />
                    ))}
                </div>
              </div>
              <div className='totalSection'>
                <h3>Total</h3>
                <p>
                  <span>$ </span>
                  {45.9}
                </p>
              </div>
              <button className='checkOut'>Check Out</button>
            </div>
          )}
        </div>
      </main>

      <div className='bottomMenu'>
        <ul id='menu'>
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SaveIcon />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
