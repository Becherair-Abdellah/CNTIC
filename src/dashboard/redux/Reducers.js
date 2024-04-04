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
      state.user = JSON.parse(localStorage.getItem('user'));
    },
    logout: state => {
      state.authenticated = false;
      state.user = null; // Clear user data on logout
      localStorage.removeItem('user'); // Remove user data from localStorage
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, show_signout, hide_signout, login, logout } = show_and_hide_aside.actions;

export default show_and_hide_aside.reducer;
