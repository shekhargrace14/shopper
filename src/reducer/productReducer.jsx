


const productReducer = (state, action) => {
    switch (action.type) {
        case ("ADD_TO_CART"):
            return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case ("ADD_TO_WISHLIST"):
            return{...state,wishlist:[...state.wishlist,{...action.payload,qty:1}]}
        case("REMOVE_FROM_CART"):
            return{...state,cart:state.cart.filter(c=>c.id !==action.payload.id)}
        case("REMOVE_FROM_WISHLIST"):
            return{...state,wishlist:state.wishlist.filter(c=>c.id !==action.payload.id)}
        default:
            break;
    }
    return state;
}

export default productReducer