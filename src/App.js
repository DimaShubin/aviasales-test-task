import React from "react";
import { Provider } from "react-redux";
import Search from "./pages/Search";
import { store } from "./_helpers";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
