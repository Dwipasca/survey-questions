import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuestionList from "./pages/QuestionList";
import QuestionCreate from "./pages/QuestionCreate";
import QuestionEdit from "./pages/QuestionEdit";

import { QuestionsProvider } from "./context/Questions";

export default function App() {
  return (
    <>
      <Navbar />
      <QuestionsProvider>
        <Routes>
          <Route path="/" element={<QuestionList />} />
          <Route path="/create-question" element={<QuestionCreate />} />
          <Route path="/edit-question/:id" element={<QuestionEdit />} />
        </Routes>
      </QuestionsProvider>

      <Footer />
    </>
  );
}
