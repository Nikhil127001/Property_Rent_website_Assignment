// myReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  endingIndex: 6,
  propertiesData : [],
  selectedPropertyData : []
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
  
    setEndingIndex: (state, action) => {
      state.endingIndex = action.payload;
    },

    setpropertiesData: (state, action) => {
      state.propertiesData = action.payload;
    },
    setSelectedPropertyData: (state, action) => {
      state.selectedPropertyData = action.payload;
    },
  },
});

export const { setEndingIndex , setpropertiesData ,setSelectedPropertyData} = mySlice.actions;
export default mySlice.reducer;
