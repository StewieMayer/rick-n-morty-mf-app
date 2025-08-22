import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResultData, CharactersApiProps } from "@/types/characterTypes";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.mutation<ResultData, CharactersApiProps>({
      query: ({
        page = 1,
        name = "",
        species = "",
        status = "",
        gender = "",
        type = "",
      }) => ({
        url: "character/",
        params: {
          page,
          name,
          species,
          status,
          gender,
          type,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCharactersMutation } = charactersApi;
