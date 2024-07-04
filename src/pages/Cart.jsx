import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/productContext'
import { PiShoppingCartLight } from 'react-icons/pi'
import { FaHeart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  const { state: { cart, wishlist }, dispatch } = useContext(ProductContext)
  console.log(cart)
  const [total,setTotal] = useState()
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  })
  return (
    <div>

      <div className="lg:container lg:m-auto grid lg:grid-cols-[9fr,3fr] grid-flow-row  gap-4 px-4 ">
        <main>
          {cart.map((product, index) => (
            <div key={index}>
              <div className="row flex justify-between items-center gap-4 hover:bg-gray-100 p-4 ">

                <figure className="column w-[30%] flex justify-center items-center">
                  <img className="sm:w-[50%] md:w-[50%]  " src={product.productImage} />
                </figure>
                <h1 className="font-primary-font sm:text-4xl text-3xl font-bold sm:my-6 my-4">{product.title}</h1>
                <div className="column grid grid-cols-2 items-center">
                  <p className='font-primary-font sm:text-4xl text-2xl text-primary-color font-semibold'>${product.price} </p>
                  <div className="price flex flex-wrap items-center justify-start gap-4 sm:my-6  my-2">
                    <div className="flex gap-4">
                      <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p>
                      {/* <del className='text-gray-500 text-1xl font-bold '>${(product.price + 5).toFixed(2)}</del> */}
                      <del className='text-gray-500 text-1xl font-bold '>${product.price}</del>
                    </div>
                  </div>
                </div>
                <AiFillDelete className='cursor-pointer' onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: product }) }} />
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
    </div>
  )
}

export default Cart