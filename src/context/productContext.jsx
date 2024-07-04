import data from '../data/data.json';
// const data = "https://dummyjson.com/products";
import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import productReducer from '../reducer/productReducer';

const initialState = {
    products : data,
    cart : [],
    wishlist:[],
}

const ProductContext = createContext();
// console.log(data)
const ProductProvider = ({children})=>{

    const [state, dispatch] = useReducer(productReducer, initialState)

    // console.log(state)

    return(
        <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
    )
}


export {ProductProvider,ProductContext}