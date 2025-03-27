const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    carts: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
       addToCart : (state,action) => {
        const newItem = action.payload
        const isItemInCart = state.carts.find((item)=> item.id === newItem.id) 

        if(isItemInCart){
            isItemInCart.quantity +=1
            isItemInCart.totalPrice = isItemInCart.price * isItemInCart.quantity
            
        }
        else{
          const tempProduct = {...newItem, quantity: 1}
          state.carts.push(tempProduct)
        }
        state.totalQuantity = state.carts.reduce((cartTotal,cartItem) => {
            return cartTotal += cartItem.quantity
        },0)
        state.totalAmount = state.carts.reduce((cartTotal,cartItem)=> {
            return cartTotal += cartItem.price * cartItem.quantity
        },0)
       },
       removeFromCart : (state, action) => {
        state.carts = state.carts.filter((item)=> item.id !== action.payload.id)
       },
       incrementQuantity: (state,action)=> {
        const cartItem = state.carts.find((item)=> item.id === action.payload.id)
        cartItem.quantity += 1
        cartItem.totalPrice = cartItem.price * cartItem.quantity
       },

       decrementQuantity : (state,action) => {
        const cartItem = state.carts.find((item)=> item.id === action.payload.id)
        if(cartItem.quantity > 1){
            cartItem.quantity -= 1
            cartItem.totalPrice = cartItem.price * cartItem.quantity
        }
        else{
            state.carts = state.carts.filter((item)=> item.id !== action.payload.id)
        }
       },
       getCartTotal : (state, action)=> {
        state.totalAmount = state.carts.reduce((cartTotal,cartItem)=> {
            return  cartTotal += cartItem.price * cartItem.quantity 
        },0)
        state.totalQuantity = state.carts.reduce((cartTotal, cartItem) => {
            return cartTotal += cartItem.quantity
        },0)
},
       clearCart: () => initialState
    }
})



export const {addToCart, clearCart, removeFromCart,incrementQuantity,decrementQuantity, getCartTotal} = cartSlice.actions
export default cartSlice.reducer