import React from "react";
import DefaultTemplate from "./templates/default";
import Routes from "./routes";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <CategoryProvider>
      <DefaultTemplate>
        <Routes />
      </DefaultTemplate>
    </CategoryProvider>
  );
}

export default App;
