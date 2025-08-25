export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
};

export interface EpisodeDetailProps {
  episodes: string[];
}

export interface UseEpisodeDetailResponse {
  isLoading: boolean;
  episodesData: Episode[];
  episodeNav: (id: string) => void;
}
