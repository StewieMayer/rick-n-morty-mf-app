import Empty from "@images/empty.png"

const CharacterEmpty: React.FC = () => {
  return <div className="flex flex-col justify-center items-center gap-2 text-center">
    <img src={Empty} alt="Empty image" />
    <h3 className="text-lg text-gray-700 font-bold">¡Cielos Morty! ¡Abre los ojos! ¡Nada de esto es real!</h3>
    <p className="text-3xl text-red-500 font-bold">404</p>
  </div>;
};

export default CharacterEmpty;
