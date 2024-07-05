import CTA from "../components/CTA";
import Usps from "../components/Usps";
import AddToCartBtn from "../components/AddToCartBtn";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { useContext} from "react";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";


// import API from '../data/data.json';

// const data = "https://dummyjson.com/products";

const SingleProduct = () => {
    const {state:{products,cart,wishlist},dispatch} = useContext(ProductContext)

    // console.log(cart)
    // console.log(wishlist)
    const {id} = useParams();
    // console.log(id)
    // const productId = Number(id);
    // console.log(productId)
    const product = products.find(p => p.id === id);
    // console.log(product)

    return (
        <>
            <hr className="mb-4"></hr>
            <div className="lg:container lg:m-auto grid lg:grid-cols-[10fr,2fr] grid-flow-row  gap-4 px-4 ">
                <main>
                    <div className="row grid md:grid-cols-2 gap-4 md:mb-12 ">
                        
                        {/* <figure className="column flex justify-center items-center">
                            <img className="sm:w-[50%] md:w-[80%]  " src={product.productImage} />   
                        </figure> */}
                        <figure className='image flex justify-center items-center relative '>
                            {/* <span className="bg-red-600 text-white text-xs h-fit py-1 px-2 absolute top-0 left-0 rounded-br-2xl" >-15%</span> */}
                            <span className="bg-primary-color py-1 px-2 text-xs text-white font-semibold rounded absolute top-2 left-0">Sale Off</span>
                            <img className='' src={product.productImage} />
                        </figure>
                        <div className="column">
                            <h1 className="font-primary-font sm:text-4xl text-3xl font-bold sm:mb-6 mb-4">{product.title}</h1>
                            <div className="price flex flex-wrap items-center justify-start gap-4 sm:my-6  my-2">
                                <p className='font-primary-font sm:text-4xl text-2xl text-primary-color font-semibold'>${product.price} </p>
                                <div className="flex gap-4">
                                    <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p>
                                    {/* <del className='text-gray-500 text-1xl font-bold '>${(product.price + 5).toFixed(2)}</del> */}
                                    <del className='text-gray-500 text-1xl font-bold '>${product.price}</del>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <span className="capitalize text-gray-600">Rating : {product.rating}</span>
                                <span className="capitalize text-gray-600">{product.category}</span>
                            </div>
                            <div className="sm:my-6 my-4 grid grid-cols-2 gap-4 ">
                                {
                                    cart.some((p)=>p.id== product.id)?
                                    <button 
                                        disabled={cart.some((p)=>p.id==product.id)} 
                                        onClick={()=>{dispatch({type:"ADD_TO_CART",payload:product})}} 
                                        className="flex flex-cols justify-center items-center gap-2 border-2 border-primary-color text-base text-primary-color py-1 px-2 rounded "> Already In Cart   
                                    </button>
                                    :
                                    <button 
                                        onClick={()=>{dispatch({type:"ADD_TO_CART",payload:product})}} 
                                        className="flex flex-cols justify-center items-center gap-2 bg-primary-color text-base text-white  py-2 px-4 rounded "><PiShoppingCartLight className="text-2xl"/> Add To Cart 
                                    </button>
                                }
                                { 
                                    wishlist.some((p)=>p.id == product.id)? 
                                    <button 
                                        disabled={wishlist.some((p)=>p.id==product.id)}
                                        onClick={()=>{dispatch({type:"ADD_TO_WISHLIST",payload:product})}}  
                                        className="flex flex-cols justify-center items-center gap-2 border-2 border-primary-color text-base text-primary-color  py-2 px-4 rounded "> Wishlisted 

                                    </button>
                                    :
                                    <button 
                                        onClick={()=>{dispatch({type:"ADD_TO_WISHLIST",payload:product})}}  
                                        className=" flex flex-cols  justify-center items-center gap-2 bg-primary-color text-sm text-white  py-2 px-4 rounded ">
                                        <FaHeart className="text-2xl"/> Wishlist 
                                    </button>
                                }
                            </div>
                            <p className="text-gray-500 text-xs">Vendor:<span className="text-primary-color text-sm"> Boostify Nest</span></p>
                            <p className="text-gray-500 text-xs">Collections:<span className="text-primary-color text-sm"> Headphone, Organic Kiwi, Vegetables </span></p>
                            <p className="text-gray-500 text-xs">Tags:<span className="text-primary-color text-sm"> Brown, Organic, Snack</span></p>
                            <p className="mt-4">{product.description}</p>

                        </div>
                    </div>

                </main>
                <aside className="relative ">
                    <div className="absolute top-4 my-4 sticky">
                        <figure>
                            <img src="../assets/ad/ad-01.webp"/>
                        </figure>
                    </div>
                </aside>
            </div>
            <RelatedProducts/>

            <CTA />
            <Usps />
        </>
    )
}

export default SingleProduct;