import { Button, Input } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useCharacterPaginator from "./hooks/useCharacterPaginator";

const CharacterPaginator: React.FC = () => {
  const {
    isPrevDisabled,
    currentPage,
    pages,
    isNextDisabled,
    handlePrevPage,
    handleChangePage,
    handleNextPage,
  } = useCharacterPaginator();

  return (
    <nav className="flex justify-center items-center w-full">
      <ul className="flex rounded-full items-center border-2 border-gray-300 space-x-3 shadow-2xl p-1">
        <li>
          <Button
            onClick={handlePrevPage}
            disabled={isPrevDisabled}
            className="flex justify-center items-center cursor-pointer hover:bg-gray-400 disabled:cursor-not-allowed border-2 border-gray-700 rounded-full bg-gray-500"
          >
            <ChevronLeftIcon className="size-8 text-white" />
          </Button>
        </li>
        <li>
          <div className="flex justify-center items-center space-x-2 font-bold text-gray-500">
            <label>Página</label>
            <Input
              type="number"
              value={currentPage}
              onChange={handleChangePage}
              className="w-16 text-center focus:outline-none focus:border-2 focus:border-blue-500  focus:text-blue-500 rounded-xl p-1 "
            />
            <label>de</label>
            <Input
              type="number"
              value={pages}
              readOnly
              className="w-16 text-center focus:outline-none "
            />
          </div>
        </li>
        <li>
          <Button
            onClick={handleNextPage}
            disabled={isNextDisabled}
            className="flex justify-center cursor-pointer hover:bg-gray-400 disabled:cursor-not-allowed items-center border-2 border-gray-700 rounded-full bg-gray-500"
          >
            <ChevronRightIcon className="size-8 text-white" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default CharacterPaginator;
