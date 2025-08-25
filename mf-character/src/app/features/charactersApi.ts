import { ResultData, CharactersApiProps } from "@/types/characterTypes";
import { baseApi } from "./baseApi";

export const charactersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query<ResultData, CharactersApiProps>({
      query: (params) => ({
        url: "character",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useLazyGetCharactersQuery } = charactersApi;
