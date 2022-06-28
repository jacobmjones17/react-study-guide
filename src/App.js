import React, { useState } from "react";
import QuestionList from "./components/QuestionList";
import QuestionForm from "./components/QuestionForm";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

function App() {
  const [page, setPage] = useState("List")
  return (
    <main>
      <NavBar onChangePage={setPage}/>
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
      {page === "Card-Form" ? <CardForm /> : <CardList />}
    </main>
  );
}

export default App;
