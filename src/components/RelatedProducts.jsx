import { PiShoppingCartLight } from "react-icons/pi"
import { ProductContext} from "../context/productContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = () =>{
    const  products = useContext(ProductContext)

    return(
        <section className='lg:container lg:mx-auto py-8 mx-4'>
        <div className='row mb-8'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl font-primary-font font-black text-[#253d4e]'>Related Products</h2>
            </div>
        </div>
        <div className='row grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {   
                products.slice(0,6).map((item)=>(
                    <Link key={item.id} to={`/singleproduct/${item.id}`}>

                    <div className='column rounded-2xl border-gray-100 border-2 overflow-hidden'>
                        <figure className='image flex justify-center relative h-[22vh]'>
                            <span className="bg-red-600 text-white text-xs h-fit py-1 px-2 absolute top-0 left-0 rounded-br-2xl" >-15%</span>
                            <img className='' src={item.images[1] || item.images} />
                        </figure>
                        <div className='info p-4'>
                            <div className="flex justify-between">
                                <p className='text-gray-400 mb-2 text-xs capitalize'>{item.category}</p>
                                <p className='text-primary-color text-xs'>In Stock</p>
                            </div>
                            <h3 className='text-sm line-clamp-1'>{item.title}</h3>
                            {/* <span className='text-sm text-gray-500 mt-3'>({item.rating})</span> */}
                            <div className="flex items-center gap-4 mt-4 ">
                                {/* <p className='text-base text-primary-color font-semibold'>${item.price} </p> */}
                                {/* <p className='text-gray-500 text-sm line-through'>${(parseFloat(item.price)+6).toFixed(2)}</p> */}
                            </div>
                            
                        </div>
                    </div>
                    </Link>

                ))
            }

        </div>

    </section>
    )
}
export default RelatedProducts