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
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/shop"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/shop/:productName"
        element={
          <Layout>
            <ProductCategory />
          </Layout>
        }
      />
      <Route
        path="/shop/:productName/:gemId"
        element={
          <Layout>
            <ProductDetails />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/admin"
        element={
          <Layout>
            <AdminPanel />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
