import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'John ' + state
    }
  }
})
export let { changeName } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changCount(state){
      return state[0].count = 3
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