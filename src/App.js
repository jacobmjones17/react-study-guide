import React, { useState } from "react";
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import NavBar from "./components/NavBar";
import CardForm from "./components/flashcards/CardForm";
import CardList from "./components/flashcards/CardList";

function App() {
  const [page, setPage] = useState("List")

  console.log(page)
  return (
    <main>
      <NavBar onChangePage={setPage}/>
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
      {page === "Card-Form" ? <CardForm /> : <CardList />}
    </main>
  );
}

export default App;
