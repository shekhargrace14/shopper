import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom";

const PODS = () => {
  const pods = [
    { id:1, title: "Everyday Fresh & Clean with Our Products", btnTitle: "Show Now", btnLink: "/contact", img: "../assets/bg/bg-img-3.png", },
    { id:2, title: "Axis Left Arm Double Chaise Lounge", btnTitle: "Show Now", btnLink: "/contact", img: "../assets/bg/bg-img-6.jpg", },
    { id:3, title: "The best Organic Products Online", btnTitle: "Show Now", btnLink: "/contact", img: "../assets/bg/bg-img-1.png", },
    { id:4, title: "Shop the best Hot Deals You Can’t Miss", btnTitle: "Show Now", btnLink: "/contact", img: "../assets/bg/bg-img-7.jpg", },
  ]
  return (
    <div>
      <section className='lg:container mx-auto  my-4'>
        <div className='row grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
          {/* {
            pods.map((pod) => (
              <div key={pod.id} className={`column bg-[url("${pod.img}")]  bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl`}>
                <div className=' w-3/4'>
                  <h3 className='text-2xl font-semibold mb-8'>{pod.title}</h3>
                  <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">{pod.btnTitle} <FaArrowRight /> </button>
                </div>
                <div></div>
              </div>
            ))
          } */}
          <div className="column bg-[url('../assets/bg/bg-img-3.png')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className=' w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>Vegies : Everyday Fresh & Clean with Our Products</h3>
              <Link to={"/vegies"}>
                <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight /> </button>
              </Link>
            </div>
            <div></div>
          </div>

          <div className="column bg-[url('../assets/bg/bg-img-6.jpg')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className='w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>Furniture : Axis Left Arm Double Chaise Lounge</h3>
              <Link to={"/furniture"}>
                <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight /> </button>
              </Link>

            </div>
            <div></div>
          </div>

          <div className="column bg-[url('../assets/bg/bg-img-7.jpg')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className='w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'> Clothes : Shop the best Hot Deals You Can’t Miss</h3>
              <Link to={"/clothes"}></Link>
              <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight /> </button>
            </div>
            <div></div>
          </div>

          <div className="column bg-[url('../assets/bg/bg-img-1.png')] bg-no-repeat bg-cover bg-center lg:px-12 px-8 py-16 rounded-2xl">
            <div className='w-3/4'>
              <h3 className='text-2xl font-semibold mb-8'>The best Organic Products Online</h3>
              <Link to={"/contact"}>
                <button className="flex flex-cols items-center gap-2 bg-primary-color text-white py-1 px-2 rounded ">Show Now <FaArrowRight /> </button>
              </Link>

            </div>
            <div></div>
          </div>



        </div>
      </section>
    </div>
  )
}

export default PODS