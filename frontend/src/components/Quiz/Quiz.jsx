import React, { useState, useEffect } from "react";
import "./Quiz.css";
import QUESTIONS from "../../data/questions.js";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest";

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15);
  const [timeUp, setTimeUp] = useState(false);

  const shuffleQuestions = () => {
    const shuffled = [...QUESTIONS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    return shuffled;
  };

  const getCorrectIndex = (q) => {
    if (!q) {
      return -1;
    }
    if (typeof q.correctIndex === "number") {
      return q.correctIndex;
    }
    if (typeof q.correct === "string") {
      const idx = q.options.findIndex((o) => o === q.correct);
      return idx >= 0 ? idx : -1;
    }
    return -1;
  };

  const question = shuffledQuestions[currentQuestion];
  const correctIndex = getCorrectIndex(question);

  const saveScoreToDB = async (finalScore) => {
    try {
      const res = await fetch(
        "https://bharat-explorer-ys4i.onrender.com/api/v1/quiz/score",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            score: finalScore,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to save score");
      }
      const data = await res.json();
      console.log("Score Saved:", data);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  useEffect(() => {
    if (showResult || !started) {
      return;
    }
    if (selectedIndex !== null || timeUp) {
      return;
    }
    if (timer === 0) {
      setTimeUp(true);
      return;
    }
    const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer, selectedIndex, showResult, timeUp, started]);

  const handleStart = () => {
    const newSet = shuffleQuestions();
    setShuffledQuestions(newSet);
    setStarted(true);
    setCurrentQuestion(0);
    setSelectedIndex(null);
    setScore(0);
    setTimer(15);
    setShowResult(false);
    setTimeUp(false);
  };

  const handleAnswerClick = (index) => {
    if (selectedIndex !== null || timeUp) {
      return;
    }
    setSelectedIndex(index);
    if (index === correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedIndex(null);
      setTimer(15);
      setTimeUp(false);
    } else {
      localStorage.setItem("lastScore", score);
      saveScoreToDB(score);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = shuffleQuestions();
    setShuffledQuestions(reshuffled);
    setCurrentQuestion(0);
    setSelectedIndex(null);
    setScore(0);
    setTimer(15);
    setShowResult(false);
    setTimeUp(false);
  };

  const handleStopQuiz = () => {
    setStarted(false);
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedIndex(null);
    setScore(0);
    setTimer(15);
    setTimeUp(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  const optionClass = (index) => {
    if (selectedIndex !== null) {
      if (index === correctIndex) {
        return "option-btn correct";
      }
      if (index === selectedIndex && index !== correctIndex)
        return "option-btn wrong";
      return "option-btn";
    }
    if (timeUp) {
      if (index === correctIndex) {
        return "option-btn correct";
      }
      return "option-btn";
    }
    return "option-btn";
  };

  if (!started) {
    return (
      <div className="quiz-container">
        <button className="logout-top" onClick={handleLogout}>
          Logout
        </button>
        <div className="quiz-card welcome-card">
          <h2>Welcome {username}! 👋</h2>
          {localStorage.getItem("lastScore") && (
            <p className="last-score">
              Your last quiz score:{" "}
              <strong>{localStorage.getItem("lastScore")}</strong> / 10
            </p>
          )}
          <p>
            Ready to test your knowledge about{" "}
            <strong>India’s Culture, Cuisine, and Heritage?</strong>?
          </p>
          <p>
            You’ll face <strong>10 questions</strong>, each with{" "}
            <strong>15 seconds</strong> to answer. Choose wisely.
          </p>
          <div>ALL THE BEST 🎯</div>
          <button className="start-btn" onClick={handleStart}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (started && shuffledQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <h2>Loading Questions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <button className="logout-top" onClick={handleLogout}>
        Logout
      </button>
      {!showResult ? (
        <div className="quiz-card">
          <div className="quiz-header">
            <h2>
              Question {currentQuestion + 1} / {shuffledQuestions.length}
            </h2>
            <div className={`timer ${timer <= 5 ? "warning" : ""}`}>
              ⏱ {timer}s
            </div>
          </div>
          <h3 className="question-text">{question?.question}</h3>
          <div className="options">
            {question?.options?.map((option, index) => (
              <button
                key={index}
                className={optionClass(index)}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedIndex !== null || timeUp}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="quiz-footer">
            {(selectedIndex !== null || timeUp) && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="next-btn" onClick={handleNext}>
                  {currentQuestion + 1 === shuffledQuestions.length
                    ? "Finish"
                    : "Next"}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="result-card">
          <h2>Quiz Completed 🎉</h2>
          <p>
            You scored <strong>{score}</strong> out of{" "}
            <strong>{shuffledQuestions.length}</strong>
          </p>
          <div className="result-buttons">
            <button className="restart-btn" onClick={handleRestart}>
              Restart Quiz
            </button>
            <button className="stop-btn" onClick={handleStopQuiz}>
              Stop Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
