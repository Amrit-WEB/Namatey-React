import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //name of the slice
  name: "cart",
  //Intial values of state
  initialState: {
    cartItems: [],
  },
  //redecers me saare action method likhege
  reducers: {
    //Apna fuction likh lo reqiuirement ke hisab se
    //har function 2 argument lete hai - state aur action ()
    //but dispatch ke time ye method 1 argument lega action wala(behind the scene redux manage karta ha 2 se 1 argument )
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearItem: (state) => {
      //state.cartItems = []  --- we can not clear array like this in redux (read concept of immer in redux)
      state.cartItems.length = 0; // so we will do like this
    },
  },
});

//createSlice cartSlice ko return karega ek object jisme wo sab method actions attribute me hoga isliye uskno named export kiya gya hai and poore file ke liye cartSlice.reducer
export const { addItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
