import data from '../data/data.json';
// const data = "https://dummyjson.com/products";
import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import productReducer from '../reducer/productReducer';


const initialState = {
    products : data,
    cart : [],
}

const ProductContext = createContext();
console.log(data)
const ProductProvider = ({children})=>{



    const [state, dispatch] = useReducer(productReducer, initialState)
    // const [products, setProducts]= useState([]);

    // const getProductsData = async (url) =>{
    //     try{
    //         const res = await axios.get(url)
    //         const productData = await res.data  
    //         if(productData.products.image == "null"){
    //             return
    //         }else{
    //             setProducts(productData.products)
    //         }

    //     }catch(error){
    //         console.log(error)
    //     }
    // }
    
    // useEffect(()=>{
    //     getProductsData(data)
    // },[])
    console.log(state)

    return(
        <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
    )
}


export {ProductProvider,ProductContext}