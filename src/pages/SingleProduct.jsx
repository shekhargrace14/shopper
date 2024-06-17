import CTA from "../components/CTA";
import Usps from "../components/Usps";
import AddToCartBtn from "../components/AddToCartBtn";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";

// import API from '../data/data.json';


const SingleProduct = () => {
    const products = useContext(ProductContext)

    console.log(products)
    const {id} = useParams();
    console.log(id)
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    console.log(product)


    // const {
    //     id:productID,
    //     title,
    //     productImage,
    //     category,
    //     price,
    //     description,
    //     rating,
    //     quantity,
    // } = products

    return (
        <>
            <hr className="mb-4"></hr>
            <div className="lg:container lg:m-auto grid grid-cols-[10fr,2fr] gap-4 px-4">
                <main>
                    <div className="row grid grid-cols-2">
                        <div className="column grid justify-center items-center">
                            <figure>
                                {/* <img src={productImage} /> */}
                            </figure>
                        </div>
                        <div className="column">
                            <span className="bg-primary-color py-1 px-2 text-xs font-semibold rounded">Sale Off</span>
                            {/* <h1 className="font-primary-font text-4xl font-bold my-6">{title}</h1> */}
                            <div className="flex flex-wrap items-center justify-start gap-4 mt-4 ">
                                {/* <p className='font-primary-font text-4xl text-primary-color font-semibold'>${price} </p> */}
                                <div>
                                    {/* <p className='text-primary-font text-accent font-bold text-xs '>15% Off</p> */}
                                    {/* <del className='text-gray-500 text-1xl font-bold '>${price + 5}</del> */}
                                </div>
                            </div>
                            {/* <p className="mt-6">{description}</p> */}
                            <div className="my-6">
                                <AddToCartBtn/>
                            </div>
                            {/* <p className="text-gray-500 text-xs">Vendor:<span className="text-primary-color text-sm"> Boostify Nest</span></p> */}
                            {/* <p className="text-gray-500 text-xs">Collections:<span className="text-primary-color text-sm"> Headphone, Organic Kiwi, Vegetables </span></p> */}
                            {/* <p className="text-gray-500 text-xs">Tags:<span className="text-primary-color text-sm"> Brown, Organic, Snack</span></p> */}

                        </div>
                    </div>
                    <RelatedProducts/>

                </main>
                <aside className="relative">
                    <div className="absolute top-4 my-4 sticky">
                        <figure>
                            <img src="../assets/ad/ad-01.webp"/>
                        </figure>
                    </div>
                </aside>
            </div>
            <CTA />
            <Usps />
        </>


    )
}

export default SingleProduct;