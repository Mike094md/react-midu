import React from "react";
import TwitterCard from "./TwitterCard.jsx";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <TwitterCard initialIsFollowing username={"midudev"}>
        Miguel Ángel Durán
      </TwitterCard>
      <TwitterCard initialIsFollowing={false} username={"Tompson094"}>
        Miguel Díez Jiménez
      </TwitterCard>
    </section>
  );
};

export default App;
