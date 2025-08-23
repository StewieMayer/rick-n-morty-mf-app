import LoadingImg from "@images/loader.png"

interface LoaderProps {
  message?: string
}

const Loader: React.FC<LoaderProps> = ({message}) => {
  return (
      <div className="flex flex-col items-center p-12 gap-2">
        <img src={LoadingImg} className="w-50 h-50 animate-[spin_1.3s_linear_infinite]" />
        <p className="text-2xl text-gray-600 font-bold">{message}</p>
      </div>
  );
};

export default Loader;