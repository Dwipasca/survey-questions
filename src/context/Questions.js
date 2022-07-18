import React, { createContext, useState } from "react";

import { questions } from "../constant/data";

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const [listQuestion, setListQuestion] = useState(questions);

  return (
    <QuestionsContext.Provider value={{ listQuestion, setListQuestion }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };
