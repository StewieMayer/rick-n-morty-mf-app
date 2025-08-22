import useDispatchHandler from "@/hooks/useDispatchHandler";
import { CharacterGender, CharacterStatus } from "@/types/characterTypes";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterForm = () => {
  //Form state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [type, setType] = useState<string>("");

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
  const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setGender(e.target.value);
  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) =>
    setType(e.target.value);

  const callback = () => {
    if (name) params.set("name", name);
    else params.delete("name");
    if (species) params.set("species", species);
    else params.delete("species");
    if (status) params.set("status", status);
    else params.delete("status");
    if (gender) params.set("gender", gender);
    else params.delete("gender");
    if (type) params.set("type", type);
    else params.delete("type");
    if (status || species || name || gender || type) params.set("page", "1");
    else params.delete("page");
    setParams(params);

    setName("");
    setSpecies("");
    setStatus("");
    setGender("");
    setType("");
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);

    handleDispatch({
      params: { page: 1, name, species, status, gender, type },
      callback,
    });

    setIsLoading((prev) => !prev);
  };

  return {
    name,
    species,
    status,
    gender,
    type,
    isLoading,
    handleChangeName,
    handleChangeSpecies,
    handleChangeStatus,
    handleChangeGender,
    handleChangeType,
    submit,
  };
};

export default useCharacterForm;
