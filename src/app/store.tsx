
import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/form/formSlice.ts';

const store = configureStore({
    reducer: { form:formSlice },
  });

  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  export default store
  