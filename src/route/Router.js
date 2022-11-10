import { Navigate, Routes, Route } from "react-router-dom";
import NavLayout from "../layouts/NavLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Account from "../pages/Account";
import AddressPage from "../pages/AddressPage";
import CheckoutPage from "../pages/CheckoutPage";
import ContactUsPage from "../pages/ContactUsPage";
import HomePage from "../pages/HomePage";
import LoginRegisPage from "../pages/LoginRegisPage";
import OrdersPage from "../pages/OrdersPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import ProductPage from "../pages/ProductPage";

import ShopPage from "../pages/ShopPage";
import WishlistPage from "../pages/WishlistPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/authentication" element={<LoginRegisPage />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/product/:productId" element={<ProductPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/" element={<ProfileLayout />}>
          <Route path="/my-account" element={<Account />}></Route>
          <Route path="/my-account/orders" element={<OrdersPage />}></Route>
          <Route
            path="/my-account/add-payment-method"
            element={<PaymentMethodPage />}
          ></Route>
          <Route
            path="/my-account/edit-address"
            element={<AddressPage />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}
export default Router;
