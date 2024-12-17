import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginFormInputs {
    email: string;
    password: string;
  }
  
  const formSlice = createSlice({
    name: 'form',
    initialState: { email: '', password: '' },
    reducers: {
      setFormData: (state, action: PayloadAction<LoginFormInputs>) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
      clearFormData: (state) => {
        state.email = '';
        state.password = '';
      }
    },
  });

  export const { setFormData,clearFormData } = formSlice.actions;
  export default formSlice.reducer;