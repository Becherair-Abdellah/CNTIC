import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  aside: 0,
  signout : 0,
}

const show_and_hide_aside = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    show: state => {

      state.aside = 1
    },
    hide: state => {
         state.aside = 0
    },
    show_signout: state => {

        state.signout = !state.signout;
    },
    hide_signout : state => {
      state.signout = 0
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide ,show_signout,hide_signout} = show_and_hide_aside.actions

export default show_and_hide_aside.reducer