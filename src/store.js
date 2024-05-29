import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      let 번호 = state.findIndex((item) => { return item.id === action.payload })
      state[번호].count++
    },
    addProduct(state, action){
      state.push(action.payload)
    },
    minusCount(state, action){
      let 번호 = state.findIndex((item) => { return item.id === action.payload })
      if(state[번호].count > 1){
        state[번호].count--
      }
      else{
        let item = state.filter((item) => { return item.id !== action.payload })
        return item
      }
    },
    removeProduct(state, action){
      let item = state.filter((item) => { return item.id !== action.payload })
      return item
    }
  }
})
export let { addCount, addProduct, minusCount, removeProduct } = cart.actions




export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 