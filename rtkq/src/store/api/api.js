import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3018/';

export const itemApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => '/items?_sort=id&_order=desc',
        }),

        addItem: builder.mutation({
            query: (body) => ({
                url: 'items',
                method: 'POST',
                body,
                credentials: 'include',
            })

        }),

        removeItem: builder.mutation({
            query: (id)=>({
                url: 'items/${id}',
                method: 'DELETE',
                credentials: 'include',
            })

        })

    }),

});

export const { useGetItemsQuery, useAddItemMutation, useRemoveItemMutation } = itemApi;

