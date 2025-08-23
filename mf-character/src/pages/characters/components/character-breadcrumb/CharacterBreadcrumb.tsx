import React from "react";
import useCharacterBreadcrumb from "./hooks/useCharacterBreadcrumb";
import { Button } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toUpperFirst } from "@/utils/stringUtils";

const CharacterBreadcrumb: React.FC = () => {
  const { paramsArr, deleteParam } = useCharacterBreadcrumb();

  return (
    paramsArr.length > 0 && (
      <div className="flex w-full justify-center py-2 bg-gray-100">
        <div className="container flex flex-wrap px-4 items-center gap-4 ">
          {paramsArr.map(({ key, value }) => {
            const onClick = () => deleteParam(key);
            return (
              <div className="flex items-center justify-between gap-2 bg-gray-300 px-2 py-1 rounded-xl text-sm font-medium text-gray-600">
                <span>
                  <span className="font-bold">{toUpperFirst(key)}</span>:{" "}
                  {value}
                </span>
                <Button
                  onClick={onClick}
                  className="flex items-center justify-center bg-red-400 rounded-full cursor-pointer text-white hover:transform hover:scale-125"
                >
                  <XMarkIcon className="size-3" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default CharacterBreadcrumb;
