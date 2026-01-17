import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://simplecrudapi.com/api' }),
  tagTypes: ['Posts'],
  endpoints: () => ({}),
});
