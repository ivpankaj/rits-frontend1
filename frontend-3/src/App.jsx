import NavBar from "./components/navbar/NavBar";
import CategoryMenu from "./components/Category/CategoryMenu";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/BestDealsSection/ProductList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <CategoryMenu />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App
