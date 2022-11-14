import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryFnErrorHandler } from "../utils/queryFnErrorHandler";

const BASE_URL = "http://localhost:4000/";
const SUPERHEROS_ENDPOINT = "superheroes";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSuperheros: builder.query<Superhero[], undefined>({
      query: () => SUPERHEROS_ENDPOINT,
    })
  })
});

// RTK Query + Firebase
// https://stackoverflow.com/questions/71587312/is-it-possible-to-use-firebase-query-with-redux-toolkit-or-rtk-query-in-react
// https://stackoverflow.com/a/72879150/14782928
// If you call the same useQuery hook with the same arguments in another component, those two will share the cache entry and return exactly the same data - it will not trigger another request to the server. So: just useQuery everywhere you need it :)
export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getSomeDataFromFirebase: builder.query<Superhero[], undefined>({
      // Note that you can pass a reference to queryFn here (queryFn: getSomeDataFromFirebase)
      async queryFn(arg, queryApi, extraOptions, baseQuery) {
        try {
          // if ('some condition...') throw new Error('Some error');
          return {
            data: [],
          };
        } catch (error) {
          return queryFnErrorHandler(error);
        };
      },
    }),
    // mutateSomeDataInFirebase: builder.mutation<>({
    // }),
  })
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetSuperherosQuery,
} = apiSlice;