// import SingleProduct from '../pages/SingleProduct'
import { Link } from 'react-router-dom'
import {ProductContext} from "../context/productContext"
import { useContext } from 'react';

const FeatureProducts = () => {
    const {state:{products},dispatch}  = useContext(ProductContext)    
    console.log(products)
  return (
    <section className='lg:container lg:mx-auto py-8 px-4'>
        <div className='row mb-8'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl font-primary-font font-black text-[#253d4e]'>Featured Products</h2>

            </div>
        </div>
        <div className='row grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
            {
                products.map((item,index)=>(
                    <Link key={index} to={`/singleproduct/${item.id}`}>
                    {/* <Link key={index} to="SingleProduct.jsx"> */}
                        <div className='bg-[#f7f7f7] column rounded-2xl border-gray-100 border-2 p-2' >
                            <figure className='image flex justify-center h-[21vh]'>
                                <img className='' src={item.productImage || item.productImage} />
                            </figure>
                            <div className='info text-center'>
                                <h3 className='line-clamp-1'>{item.title}</h3>
                                <p className='text-gray-500 capitalize'>{item.category} </p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>  
    </section>
  )
}

export default FeatureProducts