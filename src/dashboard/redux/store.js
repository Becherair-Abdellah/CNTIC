import { configureStore } from '@reduxjs/toolkit'
import  show_and_hide_aside  from './Reducers'
 const store = configureStore({
  reducer: {
    show_and_hide_aside
  },
});
export default store;