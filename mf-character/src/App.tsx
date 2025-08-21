import { Provider } from "react-redux";
import { store } from "./app/store";
import React from "react";
import Characters from "./pages/characters/Characters";
import "@/styles/index.css";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Characters />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
