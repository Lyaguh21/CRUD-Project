import { configureStore } from '@reduxjs/toolkit';
import { viewSlice } from '@/entities/view/model/viewSlice';
import { baseApi } from '@/shared/api/baseApi';

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
