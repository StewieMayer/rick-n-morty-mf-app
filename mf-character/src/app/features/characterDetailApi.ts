import { Character } from "@/types/characterTypes";
import { baseApi } from "./baseApi";

const characterDetailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacterDetail: build.query<Character, string>({
      query: (id) => ({
        url: `character/${id}`,
        method: "GET",
      }),
      transformErrorResponse: (response) =>
        response.status === 404 ? { error: { empty: true } } : response, 
    }),
  }),
});

export const { useGetCharacterDetailQuery } = characterDetailApi;
