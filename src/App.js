import React, { useState } from "react";
import QuestionList from "./components/QuestionList";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  const [page, setPage] = useState("List")
  return (
    <main>
      <NavBar onChangePage={setPage}/>
      <div className="App">
        <h1>Hello World!</h1>
        <QuestionList />
      </div>
    </main>
  );
}

export default App;
