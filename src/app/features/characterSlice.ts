import { Character, CharactersPageState } from "@/types/characterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: CharactersPageState = {
  page:1,
  count: 0,
  pages: 0,
  next: null,
  prev: null,
  loading: false,
  error: null,
  characters: [],
  currentCharacter: null,
  isModalOpen: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setPage(state,action:PayloadAction<number>){
      state.page = action.payload
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = action.payload;
    },
    setNext: (state, action: PayloadAction<string | null>) => {
      state.next = action.payload;
    },
    setPrev: (state, action: PayloadAction<string | null>) => {
      state.prev = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setCurrentCharacter: (state, action: PayloadAction<Character | null>) => {
      state.currentCharacter = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    clearState: (state) => {
      state.page =0
      state.count =0
      state.pages= 0
      state.next= null
      state.prev= null
      state.loading = false
      state.error = null
      state.characters = []
      state.currentCharacter = null
      state.isModalOpen = false
    },
  },
});

export const {
  setPage,
  setCount,
  setPages,
  setNext,
  setPrev,
  setLoading,
  setError,
  setCharacters,
  setCurrentCharacter,
  setIsModalOpen,
  clearState,
} = characterSlice.actions;
export const selectCharacter = (state: RootState): CharactersPageState =>
  state.character;
export default characterSlice.reducer;
