import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import CardForm from "./components/flashcards/CardForm";
import CardList from "./components/flashcards/CardList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="quiz" element={<QuestionList />} />
      <Route path="flashcards" element={<CardList />} />
      <Route path="addquestion" element={<QuestionForm />} />
      <Route path="addflashcard" element={<CardForm />} />
    </Routes>
  </BrowserRouter>
);