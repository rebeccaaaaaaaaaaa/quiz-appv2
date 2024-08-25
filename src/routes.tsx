import { Routes, Route } from "react-router-dom";
import Game from "./page/Game";
import Home from "./page/Home";
import QuizCategorySelector from "./page/Category";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/categories" element={<QuizCategorySelector />} />
    </Routes>
  );
}