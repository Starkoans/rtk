import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:4020';

export const itemApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Items'], //тэг для кэширования
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => `/items?_sort=id&_order=desc`,
            //тэг для кэширования
            providesTags: (result)=>result
            ? [

                ...result.map(({id})=>({type:'Items', id})),
                    {type:'Items', id:'LIST'},

                ]
                :[{type:'Items', id:'LIST'}]

        }),

        addItem: builder.mutation({
            query: (body) => ({
                url: `items`,
                method: 'POST',
                body,
                credentials: 'include',
            }),
            //тэг для кэширования
            invalidatesTags:[{type:'Items', id:'LIST'}]

        }),

        editItem: builder.mutation({
            query: ({ id, ...editedItem }) => ({
                url: `items/${id}`,
                method: 'PATCH',
                body:editedItem,
                credentials: 'include',
            }),
            //тэг для кэширования
            invalidatesTags:[{type:'Items', id:'LIST'}]

        }),

        removeItem: builder.mutation({
            query: (id)=>({
                url: `items/${id}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            //тэг для кэширования
            invalidatesTags:[{type:'Items', id:'LIST'}]

        })

    }),

});

export const { useGetItemsQuery, useAddItemMutation, useRemoveItemMutation, useEditItemMutation } = itemApi;

