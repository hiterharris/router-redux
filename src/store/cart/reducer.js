const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_ITEM":
            return {
                cart: [
                    ...state.cart.filter(item => item !== action.payload)
                ]
            }
        default:
            return state
    }
}

export default cartReducer
