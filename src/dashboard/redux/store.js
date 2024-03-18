import { configureStore } from '@reduxjs/toolkit'
import  show_and_hide_aside  from './Reducers'
const loadUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem('user');
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
};
const store = configureStore({
  reducer: {
    show_and_hide_aside,
  },
  preloadedState: {
    show_and_hide_aside: {
      user: loadUserDataFromLocalStorage(), // Load user data from localStorage
    },
  },
});
export default store;