import { FaArrowRight, FaRegPaperPlane } from "react-icons/fa";
import FeatureProducts from '../components/FeatureProducts';
import PopularProduct from '../components/PopularProducts';
import Deal from '../components/Deal';
import CTA from "../components/CTA";
import Usps from '../components/Usps';
import Header from "../components/Header";
// import { useProductContext } from "../context/productContext";


// import image1 from "../assets/slider-1-1.webp";


const Home = () => {
  // const myName = useProductContext()
  return (
    <div>
      {/* {myName} */}


      <Header/>
      <FeatureProducts />

      <section className='lg:container mx-auto px-4'>
        <div className='row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          <div className="column bg-[url('../assets/bg/bg-img-3.png')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className=' w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>Everyday Fresh & Clean with Our Products</h3>
              <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight/> </button>
            </div>
            <div></div>
          </div>

          <div className="column bg-[url('../assets/bg/bg-img-2.png')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className='w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>Make your Breakfast Healthy and Easy</h3>
              <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight/> </button>
            </div>
            <div></div>
          </div>

          <div className="column bg-[url('../assets/bg/bg-img-1.png')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className='w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>The best Organic Products Online</h3>
              <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight/> </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <PopularProduct/>
      <Deal/>
      <CTA/>
      <Usps/>

      
    </div>
  )
}

export default Home