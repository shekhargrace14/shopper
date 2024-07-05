import { FaArrowRight, FaRegPaperPlane } from "react-icons/fa";
import FeatureProducts from '../components/FeatureProducts';
import PopularProduct from '../components/PopularProducts';
import Deal from '../components/Deal';
import CTA from "../components/CTA";
import Usps from '../components/Usps';
import Hero from "../components/Hero";
import PODS from "../components/PODS";
// import { useProductContext } from "../context/productContext";


// import image1 from "../assets/slider-1-1.webp";


const Home = () => {
  // const myName = useProductContext()
  return (
    <div>
      {/* {myName} */}


      <Hero/>
      <FeatureProducts />

      <PopularProduct/>
      {/* <Deal/> */}
      <CTA/>
      <Usps/>

      
    </div>
  )
}

export default Home