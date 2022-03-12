
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => (basketItem.id === action.payload.id)
      )
      let newBasket = [...state.items];
      if (index >= 0){
        //Remove The item that exists in the basket 
        newBasket.splice(index, 1);      
      }else{
        console.warn(`Can't remove product (id: ${action.payload.id}) as its not in basket!`);
      }

      state.items = newBasket;
    },

    updateProducts: (state, action) => {
      // console.log("action.payload", action.payload)
      state.products = action.payload
    },

  },
});

export const { addToBasket, removeFromBasket, updateProducts } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item)=> (total + item.price), 0);
export const selectProducts = (state) => state.basket.products;


export default basketSlice.reducer;