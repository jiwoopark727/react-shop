import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    changeAge(state, action){
      state.age+=action.payload
    } 
  }
})
export let { changeName, changeAge } = user.actions


let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      const item = state.find(item => item.id === action.payload)
      if (item) {
        item.count++
      }
    }
  }
})
export let { changeCount } = cart.actions




export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 