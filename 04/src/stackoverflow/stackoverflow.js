import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStackSearchTerm,
  setStackSortOrder,
  fetchStackQuestions,
} from "./stackoverflow.actions";

const StackOverflow = () => {
  const dispatch = useDispatch();
  const { searchTerm, questions, loading, error, sortOrder } = useSelector(
    (state) => state.stackoverflow
  );

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchStackQuestions(searchTerm, sortOrder));
    }
  }, [searchTerm, sortOrder, dispatch]);

  return (
    <div>
      <h1>
        Wyszukaj interesujący cie temat, po wpisaniu słowa/słów pamietaj o
        spacji 😄
      </h1>
      <input
        value={searchTerm}
        onChange={(e) => dispatch(setStackSearchTerm(e.target.value))}
        placeholder="Wpisz frazę..."
      />
      <select
        value={sortOrder}
        onChange={(e) => dispatch(setStackSortOrder(e.target.value))}
      >
        <option value="creation">Sortuj według daty</option>
        <option value="votes">Sortuj według głosów</option>
      </select>
      {loading && <p>Ładowanie...</p>}
      {error && <p>{error.message}</p>}
      <ul>
        {questions.map((question) => (
          <li key={question.question_id}>
            <a href={question.link} target="_blank" rel="noopener noreferrer">
              {question.title}
            </a>
            <span style={{ marginLeft: "10px" }}>
              Data:{" "}
              {new Date(question.creation_date * 1000).toLocaleDateString()} |
              Głosy: {question.score} Reputacja:{question.owner.reputation}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackOverflow;