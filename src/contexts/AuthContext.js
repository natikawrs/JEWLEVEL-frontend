import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as authService from "../api/authApi";
import * as productService from "../api/productApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
// import * as userService from "../api/userApi";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
          navigate(location.pathname);
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    setTimeout(() => getMe(), 1);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  //   const updateUser = async (input) => {
  //     const res = await userService.updateUser(input);
  //     setUser(res.data.user);
  //   };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productService.getAllProducts();
      setProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  // const [product, setProduct] = useState([]);
  // const { productId } = useParams();
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await productService.getProduct(productId);
  //       setProduct(res.data.product);
  //     } catch (err) {
  //       console.log(err);
  //       toast.error(err.response?.data.message);
  //     }
  //   };
  //   fetchProduct();
  //   console.log(productId);
  //   console.log("555");
  // }, [productId]);

  // console.log(product);

  // const { id } = useParams();
  // const [post, setPost] = useState({});

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const res = await postService.getPost(id);
  //       setPost(res.data.posts);
  //     } catch (err) {
  //       console.log(err);
  //       toast.error(err.response?.data.message);
  //     }
  //   };
  //   fetchPost();
  // }, [id]);
  const [wishList, setWishList] = useState([]);

  const fetchWishList = async () => {
    try {
      const res = await productService.getUserWishList();
      setWishList(res.data.findWishListByUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWishList();
  }, []);

  const toggleWishList = async (productId) => {
    const res = await productService.toggleWishList(productId);
    await fetchWishList();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        products,
        toggleWishList,
        wishList,
        fetchWishList,
        setWishList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
