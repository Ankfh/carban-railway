import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BaseUrl } from '../../BaseURL/BaseUrl'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: builder => ({
    getAllTransfer: builder.query({
      query: () => '/api/transferproduct/getalltransfer'
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { usegetAllTransferQuery } = apiSlice