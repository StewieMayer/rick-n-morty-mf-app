import { Button } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useCharacterPaginator from "./hooks/useCharacterPaginator";

const CharacterPaginator: React.FC = () => {
  const { currentPage, pages, handlePrevPage, handleNextPage, handleChangePage } =
    useCharacterPaginator();

  return (
    <nav className="flex justify-center items-center w-full">
      <ul className="flex space-x-3 shadow-2xl">
        <li>
          <Button
            onClick={handlePrevPage}
            className="flex justify-center items-center border-2 border-gray-700 rounded-full bg-gray-500"
          >
            <ChevronLeftIcon className="size-8 text-white" />
          </Button>
        </li>
        <li>
          <div className="flex">
            <input type="number" value={currentPage} onChange={handleChangePage} />
            <input type="number" name="" id="" value={pages} readOnly />
          </div>
        </li>
        <li>
          <Button
            onClick={handleNextPage}
            className="flex justify-center items-center border-2 border-gray-700 rounded-full bg-gray-500"
          >
            <ChevronRightIcon className="size-8 text-white" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default CharacterPaginator;
