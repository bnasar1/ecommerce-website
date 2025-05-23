import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Contact from "../containers/Contact";
import AboutUs from "../containers/About";
import Home from "../containers/Home";
import Products from "../containers/Products";
import ProductDetails from "../containers/Products/components/ProductDetail";
import ProductCategory from "../containers/Products/components/ProductCategory";
import AdminPanel from "../containers/Admin";

const AppRoutes = () => (
  <Router basename="/ecommerce-website">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:productName" element={<ProductCategory />} />
        <Route path="/shop/:productName/:gemId" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />{" "}
        {/* ✅ Add Admin Route */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
