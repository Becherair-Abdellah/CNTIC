import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  aside: 1,
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

  },
})

// Action creators are generated for each case reducer function
export const { show, hide } = show_and_hide_aside.actions

export default show_and_hide_aside.reducer