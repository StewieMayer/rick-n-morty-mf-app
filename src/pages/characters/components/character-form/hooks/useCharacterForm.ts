import { useGetCharactersMutation } from "@/app/features/charactersApi";
import {
  clearState,
  setCharacters,
  setCount,
  setError,
  setLoading,
  setNext,
  setPage,
  setPages,
  setPrev,
} from "@/app/features/characterSlice";
import { useAppDispatch } from "@/app/features/hooks";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCharacterForm = () => {
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [params, setParams] = useSearchParams();

  const [getCharacters, { isLoading, isError }] = useGetCharactersMutation();

  const dispatch = useAppDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeSpecies = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSpecies(e.target.value);
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(e.target.value);

  const handleSetParams = () => {
    if (name) params.set("name", name);
    else params.delete("name");
    if (species) params.set("species", species);
    else params.delete("species");
    if (status) params.set("status", status);
    else params.delete("status");
    setParams(params);
  };

  const clearForm = () => {
    setName("");
    setSpecies("");
    setStatus("");
    params.delete("page");
    setParams(params)
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading(true));
    getCharacters({ name, species, status })
      .unwrap()
      .then(({ info: { count, pages, next, prev }, results }) => {
        dispatch(setPage(1))
        dispatch(setCount(count));
        dispatch(setPages(pages));
        dispatch(setNext(next));
        dispatch(setPrev(prev));
        dispatch(setCharacters(results));
        handleSetParams();
        clearForm();
      })
      .catch((error) => {
        dispatch(clearState());
        dispatch(setCharacters([]));
        dispatch(setError(error.message));
      })
      .finally(() => dispatch(setLoading(false)));
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
