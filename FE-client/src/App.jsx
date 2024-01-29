import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import EnterPassword from "./components/EnterPassword";
import DetailProduct from "./components/DetailProduct";
import SizeGuide from "./components/SizeGuide";
import Checkout from "./components/Checkout";
import BackToTopButton from "./other/BackToTopButton";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Profile from "./components/Profile";

import FindHD from "./components/findHD/FindHD";
import PurchaseHistory from "./components/PurchaseHistory";
import Wishlist from "./components/Wishlist";

import EditHoaDon from "./components/findHD/EditHoaDon";
import Test from "./test/Test";

import PayMentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register/:email" element={<Register />} />
        <Route path="/enter-password/:email" element={<EnterPassword />} />
        <Route path="/detail-product/:idSP" element={<DetailProduct />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/tracuu" element={<FindHD />} />
        <Route path="/lich-su-mua-hang/:idkh" element={<PurchaseHistory />} />

        <Route path="/client/edit-hoa-don/:id" element={<EditHoaDon />} />

        <Route path="/payment/payment-success" element={<PayMentSuccess />} />

      </Routes>
      <BackToTopButton />
    </>
  );
}

export default App;
