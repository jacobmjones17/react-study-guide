import React from "react";
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import NavBar from "./components/NavBar";
import CardForm from "./components/flashcards/CardForm";
import CardList from "./components/flashcards/CardList";
import { Link } from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Study Guide</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/quiz">Quiz</Link> |{" "}
        <Link to="/flashcards">Flash Cards</Link> |{" "}
        <Link to="/addquestion">Add Question</Link> |{" "}
        <Link to="/addflashcard">Add Flash Card</Link> |{" "}
      </nav>
    </div>
  );
}



















//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/quiz">
//           <QuestionList />
//         </Route>
//         <Route path="/flashcards">
//           <CardList />
//         </Route>
//         <Route path="/addquestion">
//           <QuestionForm />
//         </Route>
//         <Route path="/addflashcard">
//           <CardForm />
//         </Route>
//       </Routes>
//     </div>
//   );
// }



export default App;
