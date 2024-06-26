import CTA from "../components/CTA";
import Usps from "../components/Usps";
import AddToCartBtn from "../components/AddToCartBtn";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { useContext} from "react";
import { FaHeart } from "react-icons/fa";

// import API from '../data/data.json';

// const data = "https://dummyjson.com/products";

const SingleProduct = () => {
    const products = useContext(ProductContext)

    console.log(products)
    const {id} = useParams();
    console.log(id)
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    console.log(product)


    const {
        // id:productID,
        title,
        images,
        category,
        price,
        description,
        rating,
        // quantity,
    } = product

    // useEffect(()=>{
    //     getProductsData(data)
    // },[])

    return (
        <>
            <hr className="mb-4"></hr>
            <div className="lg:container lg:m-auto grid lg:grid-cols-[10fr,2fr] grid-flow-row  gap-4 px-4 ">
                <main>
                    <div className="row grid md:grid-cols-2 gap-4 md:mb-16 ">
                        
                        <figure className="column flex justify-center items-center">
                            <img className="sm:w-[50%] md:w-[80%]  " src={images[1] || images} />   
                        </figure>
                        <div className="column">
                            <span className="bg-primary-color py-1 px-2 text-xs text-white font-semibold rounded">Sale Off</span>
                            <h1 className="font-primary-font sm:text-4xl text-3xl font-bold sm:my-6 my-4">{title}</h1>
                            <div className="price flex flex-wrap items-center justify-start gap-4 sm:my-6  my-2">
                                <p className='font-primary-font sm:text-4xl text-2xl text-primary-color font-semibold'>${price} </p>
                                <div className="flex gap-4">
                                    <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p>
                                    <del className='text-gray-500 text-1xl font-bold '>${(price + 5).toFixed(2)}</del>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <span className="capitalize text-gray-600">Rating : {rating}</span>
                                <span className="capitalize text-gray-600">{category}</span>
                            </div>
                            <p className="">{description}</p>
                            <div className="sm:my-6 my-4 flex gap-4">
                                <AddToCartBtn/>
                                <button className="flex flex-cols items-center gap-2 bg-primary-color text-sm text-white  py-1 px-2 rounded "><FaHeart/> Wishlist </button>

                            </div>
                            <p className="text-gray-500 text-xs">Vendor:<span className="text-primary-color text-sm"> Boostify Nest</span></p>
                            <p className="text-gray-500 text-xs">Collections:<span className="text-primary-color text-sm"> Headphone, Organic Kiwi, Vegetables </span></p>
                            <p className="text-gray-500 text-xs">Tags:<span className="text-primary-color text-sm"> Brown, Organic, Snack</span></p>

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