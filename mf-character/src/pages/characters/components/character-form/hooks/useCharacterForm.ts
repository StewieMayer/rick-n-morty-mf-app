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

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);

    const newParams: Record<string, string> = {};

    if (name) newParams["name"] = name;
    if (species) newParams["species"] = species
    if (status) newParams["status"]= status
    if (gender) newParams["gender"] =gender
    if (type) newParams["type"]= type

    setParams(newParams);

    setName("");
    setSpecies("");
    setStatus("");
    setGender("");
    setType("");

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
