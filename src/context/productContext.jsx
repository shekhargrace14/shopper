// import data from '../data/data.json';
const data = "https://dummyjson.com/products";
import axios from "axios";
import { createContext, useEffect, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({children})=>{
    const [products, setProducts]= useState([]);


    const getProductsData = async (url) =>{
        try{
            const res = await axios.get(url)
            const productData = await res.data  
            if(productData.products.image == "null"){
                return
            }else{
                setProducts(productData.products)
            }

        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getProductsData(data)
    },[])
    console.log(products)

    return(
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}


export {ProductProvider,ProductContext}