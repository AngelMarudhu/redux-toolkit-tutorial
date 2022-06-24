import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modelSlice = createSlice({
  name: 'model',
  initialState,

  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modelSlice.actions;

export default modelSlice.reducer;
