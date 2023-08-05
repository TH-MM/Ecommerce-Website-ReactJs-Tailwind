import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/shop";
import SingleProductPage from "./Components/shop/singleProductPage";
import ContactUs from "./Components/contactUs";
import Footer from "./Components/Footer/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './scrollToTop';
function App() {
  return (
    <BrowserRouter>
      <div className="font-oxygen">
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/store" element={<Shop />} />
          <Route path="/store/:category" element={<Shop />} />
          <Route path="/product/:category/:productId" element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
