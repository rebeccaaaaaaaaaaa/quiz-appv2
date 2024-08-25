import { Routes, Route } from "react-router-dom";
import Game from "./page/Game";
import Home from "./page/Home";
import QuizFeedback from "./components/Feedback";
import CategorySelector from "./page/Category";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/categories" element={<CategorySelector />} />
      <Route path="/feedback" element={<QuizFeedback />} />
    </Routes>
  );
}