import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as cartService from "../api/cartApi";
import { useAuth } from "./AuthContext";
import { getAccessToken } from "../utils/localStorage";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    const fetchPriceCart = async () => {
      try {
        if (getAccessToken()) {
          await getPrice();
          await getCart();
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPriceCart();
  }, []);

  // const fetchPriceCart = async () => {
  //   try {
  //     if (getAccessToken()) {
  //       await getPrice();
  //       await getCart();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchPriceCart();
  // }, []);

  const getPrice = async () => {
    try {
      const res = await cartService.getTotalPriceApi();
      setTotalPrice(res.data.totalPrice);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(cartItems);
  const addItemToCart = async (productId, quantity) => {
    try {
      const filteredCart = cartItems.filter(
        (item) => item.Product.id != productId
      );

      const res = await cartService.createCartApi(productId, quantity);

      setCartItems([res.data.JoinCartData, ...filteredCart]);
      getPrice();
    } catch (err) {
      toast.error("Adding Error");
    }
  };

  const getCart = async () => {
    const res = await cartService.getCartApi();
    if (res.data.JoinCartData) {
      setCartItems([...res.data.JoinCartData]);
    }
  };

  const deleteCartItem = async (id) => {
    await cartService.deleteCartItemApi(id);
    setCartItems(cartItems.filter((cartItem) => id !== cartItem.id));
  };

  const updateCart = async (cartItem) => {
    await cartService.updateCartApi(cartItem);
  };

  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  const openShoppingCart = () => {
    setIsOpenShoppingCart(true);
  };

  const closeShoppingCart = () => {
    setIsOpenShoppingCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cartItems,
        setCartItems,
        getCart,
        deleteCartItem,
        updateCart,
        // getPrice,
        totalPrice,
        openShoppingCart,
        closeShoppingCart,
        isOpenShoppingCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
