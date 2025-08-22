import useDispatchHandler from "@/hooks/useDispatchHandler";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterForm = () => {
  //Form state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //Usefull hooks
  const [params, setParams] = useSearchParams();
  const { handleDispatch } = useDispatchHandler();

  //Handlers
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeSpecies = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSpecies(e.target.value);
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);

  const callback = () => {
    if (name) params.set("name", name);
    else params.delete("name");
    if (species) params.set("species", species);
    else params.delete("species");
    if (status) params.set("status", status);
    else params.delete("status");
    if(status || species || name) params.set("page", "1");
    else params.delete("page");
    setParams(params);

    setName("");
    setSpecies("");
    setStatus("");
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);

    handleDispatch({
      params: { name, species, status, page: 1 },
      callback,
    });

    setIsLoading((prev) => !prev);
  };

  return {
    name,
    species,
    status,
    isLoading,
    handleChangeName,
    handleChangeSpecies,
    handleChangeStatus,
    submit,
  };
};

export default useCharacterForm;
