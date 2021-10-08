const initialState = {
    cart: [
        {
            id: 1,
            title: `Harry Potter and the Sorcerer's Stone`,
            author: 'J.K. Rowling',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51DF6ZR8G7L._SX329_BO1,204,203,200_.jpg',
        },
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer
