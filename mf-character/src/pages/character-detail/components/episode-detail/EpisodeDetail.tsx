import customKey from "@/utils/customKey";
import useEpisodeDetail from "./hooks/useEpisodeDetail";
import { EpisodeDetailProps } from "@/types/episodeTypes";

const EpisodeDetail: React.FC<EpisodeDetailProps> = ({ episodes }) => {
  const { episodesData, episodeNav } = useEpisodeDetail({ episodes });

  return (
    <div className="flex justify-center items-center gap-4 flex-1 p-4">
      <table className="table-fixed w-full rounded-2xl overflow-hidden border-collapse [&_td]:p-4 [&_th]:p-4">
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th>Episodio</th>
            <th>Nombre</th>
            <th>Fecha de emisión</th>
          </tr>
        </thead>
        <tbody>
          {episodesData.map((episode) => (
            <tr
              onClick={() => episodeNav(episode.id)}
              key={customKey([episode.id, episode.name])}
              className="border-t border-gray-300 even:bg-gray-100 hover:bg-blue-100 cursor-pointer hover:text-blue-500"
            >
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodeDetail;
