import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    numberCart: 0,
    carts: [],
  },
  reducers: {
    clearAllCart: (state) => {
      state.carts = [];
      state.numberCart = 0;
    },
    getNumberCart(state) {
      return {
        ...state,
      };
    },
    addPost: (state, action) => {
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          quantity: 1,
          status: action.payload.status,
          imageUrl: action.payload.imageUrl,
        };
        state.carts.push(cart);
      } else {
        let flag = false;
        state.carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.carts[key].quantity++;
            flag = true;
          }
        });
        if (!flag) {
          let _cart = {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            price: action.payload.price,
            quantity: 1,
            status: action.payload.status,
            imageUrl: action.payload.imageUrl,
          };
          state.carts.push(_cart);
        }
      }
      state.numberCart++;
    },
    increaseQuantity: (state, action) => {
      state.carts = action.payload;
      state.numberCart = state.carts.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
    },
    decreaseQuantity: (state, action) => {
      state.carts = action.payload;
    },
    removePost: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
  },
});
const { actions, reducer } = cartSlice;
export const {
  clearAllCart,
  getNumberCart,
  addPost,
  removePost,
  increaseQuantity,
  decreaseQuantity,
} = actions;
export default reducer;
