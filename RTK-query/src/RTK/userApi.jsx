import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://663e227de1913c476796a865.mockapi.io",
    tagTypes: ["User"],
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/userdata/userData",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `/userdata/userData/${id}`,
      providesTags: ["User"],
    }),
    addUsers: builder.mutation({
      query: (user) => ({
        url: "/userdata/userData",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/userdata/userData/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/userdata/userData/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUsersMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
