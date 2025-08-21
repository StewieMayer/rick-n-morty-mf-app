const Loader: React.FC = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col items-center shadow-2xl p-12 bg-white rounded animate-bounce">
        <div className="w-16 h-16 border-6 border-black/30 border-t-gray-600 rounded-full animate-spin"></div>
        <p className="text-gray-600 font-bold mt-2">Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;