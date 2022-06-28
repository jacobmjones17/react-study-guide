import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("List")}>Quiz</button>
      <button onClick={() => onChangePage("Form")}>Flashcard</button>
      <button onClick={() => onChangePage("Form")}>Add Question</button>
      <button onClick={() => onChangePage("Form")}>Add Flashcard</button>
    </nav>
  );
}

export default AdminNavBar;