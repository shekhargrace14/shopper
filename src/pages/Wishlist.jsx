import { useContext } from 'react'
import { ProductContext } from '../context/productContext'
// import { PiShoppingCartLight } from 'react-icons/pi'
// import { FaHeart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import RelatedProducts from '../components/RelatedProducts'
import Advertise from '../components/Advertise'

const Wishlist = () => {
  const { state: {  wishlist }, dispatch } = useContext(ProductContext)
  console.log(wishlist)
   return (
    <div>

      <div className="lg:container lg:m-auto min-h-[30vh]  grid lg:grid-cols-[9fr,3fr] grid-flow-row  gap-4 px-4 ">
        <main>
          {wishlist.map((product, index) => (
            <div key={index}>
              <div className="row flex justify-between items-center gap-4 hover:bg-gray-100 p-4 ">
                <figure className="column sm:w-[30%] w-[30%] flex justify-center items-center">
                  <img className="sm:w-[50%] md:w-[50%] w-full rounded-2xl" src={product.productImage} />
                </figure>
                <div className='sm:w-full w-[70%] grid sm:grid-cols-2 items-center'> 
                  <h1 className="font-primary-font sm:text-2xl text-1xl font-bold ">{product.title}</h1>
                  <div className="column price grid grid-cols-1 sm:grid-cols-2  items-center">
                    <div className=" flex flex-wrap items-center justify-start gap-4 sm:my-6  my-2">
                        <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p>
                        {/* <del className='text-gray-500 text-sm font-bold '>${(Number(product.price)+5)}</del> */}
                        <del className='text-gray-500 text-sm font-bold '>${(Number(product.price)+5).toFixed(2)}</del>

                        {/* <del className='text-gray-500 text-sm font-bold '>${product.price}</del> */}
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='font-primary-font sm:text-2xl text-1xl text-primary-color font-semibold'>${product.price} </p>
                      <AiFillDelete className='cursor-pointer' onClick={() => { dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product }) }} />
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}


        </main>
          <Advertise/>
      </div>
      <RelatedProducts />
    </div>
  )
}

export default Wishlist