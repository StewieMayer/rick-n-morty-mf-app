import { useGetEpisodeQuery } from "@/app/features/episodeDetailApi";
import {
  EpisodeDetailProps,
  UseEpisodeDetailResponse,
} from "@/types/episodeTypes";
import { useNavigate } from "react-router-dom";

const useEpisodeDetail = ({
  episodes,
}: EpisodeDetailProps): UseEpisodeDetailResponse => {
  const episodeParamIds = episodes.map((url) => url.split("/").pop()).join(",");
  const { data: episodesData, isLoading } = useGetEpisodeQuery(episodeParamIds);
  const navigate = useNavigate();

  const episodeNav = (id: string) => navigate(`/episodes/${id}`);

  return {
    isLoading,
    episodesData: episodesData || [],
    episodeNav,
  };
};

export default useEpisodeDetail;
