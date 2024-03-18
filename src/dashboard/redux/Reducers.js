import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aside: 0,
  signout: 0,
  authenticated: false,
  user: null,
};

const show_and_hide_aside = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    show: state => {
      state.aside = 1;
    },
    hide: state => {
      state.aside = 0;
    },
    show_signout: state => {
      state.signout = !state.signout;
    },
    hide_signout: state => {
      state.signout = 0;
    },
    login: state => {
      state.authenticated = true;
    },
    logout: state => {
      state.authenticated = false;
      state.user = null; // Clear user data on logout
      localStorage.removeItem('user'); // Remove user data from localStorage
    },
    setUserData: (state, action) => {
      if (action.payload && typeof action.payload === 'object') {
        state.user = { ...action.payload }; // Copying payload to avoid mutating it directly
        localStorage.setItem('user', JSON.stringify(action.payload)); // Store user data in localStorage
      } else {
        console.error('Invalid user data provided.'); // Log an error for invalid payload
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, show_signout, hide_signout, login, logout, setUserData } = show_and_hide_aside.actions;

export default show_and_hide_aside.reducer;
