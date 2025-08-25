import { baseApi } from "./baseApi";
import { Episode } from "@/types/episodeTypes";

const episodeDetailApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEpisode: build.query<Episode[], string>({
      query: (ids) => ({
        url: `episode/${ids}`,
        method: "GET",
      }),
      transformResponse: (response: Episode | Episode[]) =>
        response ? (Array.isArray(response) ? response : [response]) : [],
    }),
  }),
});

export const { useGetEpisodeQuery } = episodeDetailApi;
