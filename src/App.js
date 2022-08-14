import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuestionList from "./pages/QuestionList";
import QuestionCreate from "./pages/QuestionCreate";
import QuestionEdit from "./pages/QuestionEdit";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/create-question" element={<QuestionCreate />} />
        <Route path="/edit-question/:id" element={<QuestionEdit />} />
      </Routes>
      <Footer />
    </>
  );
}
