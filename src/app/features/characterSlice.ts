import { Character, CharactersPageState } from "@/types/characterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: CharactersPageState = {
  page: 1,
  name: undefined,
  species: undefined,
  status: undefined,
  currentCharacter: null,
  isModalOpen: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSpecies: (state, action: PayloadAction<string>) => {
      state.species = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setCurrentCharacter: (state, action: PayloadAction<Character | null>) => {
      state.currentCharacter = action.payload;
    },
    setIsModalOpen: (state,action: PayloadAction<boolean>) =>{
      state.isModalOpen = action.payload;
    }
  },
});

export const { setName, setPage, setSpecies, setStatus, setCurrentCharacter, setIsModalOpen } =
  characterSlice.actions;
export const selectCharacter = (state: RootState): CharactersPageState =>
  state.character;
export default characterSlice.reducer;
