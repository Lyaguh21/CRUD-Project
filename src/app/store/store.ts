import { configureStore } from '@reduxjs/toolkit';
//* fixed
import { viewSlice } from '@/entities/view';
import { baseApi } from '@/shared/api';

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type _RootState = ReturnType<typeof store.getState>;
export type _AppDispatch = typeof store.dispatch;

declare global {
  type RootState = _RootState;
  type AppDispatch = _AppDispatch;
}


