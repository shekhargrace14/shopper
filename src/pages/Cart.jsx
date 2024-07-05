import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/productContext'
// import { PiShoppingCartLight } from 'react-icons/pi'
// import { FaHeart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import RelatedProducts from '../components/RelatedProducts'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { state: { cart}, dispatch } = useContext(ProductContext)
  console.log(cart)
  const [total, setTotal] = useState()
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  })
  return (
    <div>

      <div className="lg:container lg:m-auto min-h-[30vh]  grid lg:grid-cols-[9fr,3fr] grid-flow-row  gap-4 px-4 ">
        <main>
          {cart.map((product, index) => (
            <div key={index}>
              <div className="row flex justify-between items-center gap-4 hover:bg-gray-100 p-4 ">
              <Link className='sm:w-[30%] w-[30%] ' to={`/singleproduct/${product.id}`}>
                <figure className="column flex justify-center items-center">
                  <img className="sm:w-[50%] md:w-[50%] w-full " src={product.productImage} />
                </figure>
              </Link>

                <div className='sm:w-full w-[70%] grid sm:grid-cols-2 items-center'> 
                  <h1 className="font-primary-font sm:text-2xl text-1xl font-bold ">{product.title}</h1>
                  <div className="column price grid grid-cols-1 sm:grid-cols-2  items-center">
                    <div className=" flex flex-wrap items-center justify-start gap-4 sm:my-6  my-2">
                        <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p>
                        <del className='text-gray-500 text-sm font-bold '>${(Number(product.price)+15).toFixed(2)}</del>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='font-primary-font sm:text-2xl text-1xl text-primary-color font-semibold'>${product.price} </p>
                      <AiFillDelete 
                        className='text-4xl cursor-pointer hover:bg-red-600 rounded-full p-2 hover:text-white' 
                        onClick={(e) => {e.stopPropagation(); dispatch({ type: "REMOVE_FROM_CART", payload: product }) }} />
                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>
            </div>
          ))}


        </main>
        <aside className="relative ">
          <div className="absolute sticky">
            <div className="summary  bg-gray-100  text-black p-4">
              <h3 className="text-2xl leading-normal">Summary</h3>
              <p className="text-base ">SubTotal ({cart.length}) item </p>
              <p className="text-base mt-4">Total : {total} </p>
              <button className='bg-blue-900 py-1 px-2 text-white rounded text-base mt-4' disabled={cart.length === 0}>Proceed To CheckOut</button>
            </div>
          </div>
        </aside>
      </div>
      <RelatedProducts />
    </div>
  )
}

export default Cart