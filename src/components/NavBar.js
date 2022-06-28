import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("List")}>Quiz</button>
      <button onClick={() => onChangePage("Card")}>Flashcard</button>
      <button onClick={() => onChangePage("Form")}>Add Question</button>
      <button onClick={() => onChangePage("Card")}>Add Flashcard</button>
    </nav>
  );
}

export default AdminNavBar;