import { FaArrowRight, FaRegPaperPlane } from "react-icons/fa";
import FeatureProducts from '../components/FeatureProducts';
import PopularProduct from '../components/PopularProducts';
import Deal from '../components/Deal';
import CTA from "../components/CTA";
import Usps from '../components/Usps';
import Hero from "../components/Hero";
import PODS from "../components/PODS";
// import { useProductContext } from "../context/productContext";
import HeroBanner from '../../public/assets/bg/bg-img-4.jpg'



// import image1 from "../assets/slider-1-1.webp";


const Home = () => {
  // const myName = useProductContext()
  return (
    <div>
      {/* {myName} */}

      {/* <Hero/> */}
      <section className={`bg-[url('..${HeroBanner}')] min-h-[30vh] bg-cover bg-no-repeat bg-bottom md:py-16 py-8  md:px-24 px-4 rounded-2xl mx-4" `}>
      <div className="container mx-auto top h-fit ">
        <div className='row flex'>
          <div className='column sm:w-8/12 w-12/12 '>
            <h1 className='lg:text-7xl sm:text-6xl sm:mr-0  text-4xl font-primary-font font-bold text-[#253d4e]'>Welcome to Shopper, Your personal Store</h1>
            {/* {paragraph === null ? " " : ( */}
              {/* <p className='lg:text-4xl text-1xl text-gray-600 py-8 '>{paragraph="Sign Up to get best deals in town"}</p> */}
            {/* ) */}
            {/* } */}
            {/* {formButton === null ? " " : */}
              {/* ( */}

                <form className='flex justify-between items-center pl-6 bg-white rounded-full sm:w-[70%] md:mt-16 mt-4'>
                  <FaRegPaperPlane className='text-gray-400 w-[10%]' />
                  <input className='md:py-5  pl-4 py-4 w-[80%] rounded-full' type='text' placeholder='Email address ' />
                  <button className='md:py-5 md:px-12 px-4 py-4 rounded-full bg-primary-color text-white hover:bg-primary-color-dark transition linear delay-150'>submit</button>
                </form>
              {/* ) */}
            {/* } */}
          </div>
          <div className='column'>

          </div>

        </div>
      </div>
      <div className='row bottom '></div>
    </section>
      {/* <Hero HeroBanner={HeroBanner} title={"Welcome to Shopper, Your personal Store"} paragraph={"Sign Up to get best deals in town"} formButton={"submit"}/> */}
      
      <FeatureProducts />

      <PopularProduct/>
      {/* <Deal/> */}
      <CTA/>
      <Usps/>

      
    </div>
  )
}

export default Home