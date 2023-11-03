import About from "./About"
import Banner from "./Banner"
import BestProducts from './BestProducts'
import ProductCategories from "./ProductCategories"
import Products from "./Products"

export default function Home() {
  
  return (
    <>
      <Banner />
      <About/>
      <Products />
      <BestProducts/>
      <ProductCategories/>
    </>
  )
}
