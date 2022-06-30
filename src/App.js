import React from "react";
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
