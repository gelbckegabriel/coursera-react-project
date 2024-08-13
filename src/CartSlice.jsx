import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({

  name: "cart",

  initialState: {

    items: [], // Initialize items as an empty array

    addedToCart: {},

  },

  reducers: {

    addItem: (state, action) => {

      const { name, image, cost } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {

        existingItem.quantity++;

      } else {

        state.items.push({ name, image, cost, quantity: 1 });

        state.addedToCart[name] = true;

      }

    },

    decrementItem: (state, action) => {

      const { name } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {

        existingItem.quantity--;

      }

    },

    removeItem: (state, action) => {

      const { name } = action.payload;

      const index = state.items.findIndex((item) => item.name === name);

      if (index !== -1) {

        state.items.splice(index, 1);

        state.addedToCart[name] = false;

      }

    },

    updateQuantity: (state, action) => {

      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {

        itemToUpdate.quantity = quantity;

      }

    },

  },

});



export const { addItem, decrementItem, removeItem, updateQuantity } = CartSlice.actions;



export default CartSlice.reducer;