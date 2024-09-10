import React, { useState, useEffect } from 'react';
import './App.css';

const questions = {
  round1: [
    { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
    { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] },
    { id: 3, code: ['let y;', 'console.log(y);', 'y = 20;'] },
    { id: 4, code: ['const a = 5;', 'a = 10;', 'console.log(a);'] },
    { id: 5, code: ['for (let i = 0; i <= 5; i++) {', '  console.log(i);', '}'] },
    { id: 6, code: ['if (a = 5) {', '  console.log("a is 5");', '}'] },
    { id: 7, code: ['let unused = 100;', 'let value = 50;', 'console.log(value);'] },
    { id: 8, code: ['function greet() {', '  console.log("Hello");', '}'] },
    { id: 9, code: ['let divisor = 0;', 'let result = 10 / divisor;', 'console.log(result);'] },
    { id: 10, code: ['let arr = [];', 'for (let i = 0; i < 1000000; i++) {', '  arr.push(i);', '}'] }
  ],
  // Round 2 and 3 can be added here later
};

function App() {
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedBugs, setSelectedBugs] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for each question

  useEffect(() => {
    if (selectedQuestion) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [selectedQuestion]);

  const handleRoundSelection = (round) => {
    setSelectedRound(round);
    setSelectedQuestion(null); // Reset question when switching rounds
  };

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
    setSelectedBugs([]);
    setTimeLeft(60); // Reset timer for the new question
  };

  const handleBugSelection = (lineIndex) => {
    const updatedBugs = selectedBugs.includes(lineIndex)
      ? selectedBugs.filter((index) => index !== lineIndex)
      : [...selectedBugs, lineIndex];
    setSelectedBugs(updatedBugs);
  };

  const handleSubmit = () => {
    alert(`You selected bugs on lines: ${selectedBugs.join(', ')}`);
    setSelectedQuestion(null);
  };

  return (
    <div className="app-container">
      {!selectedRound ? (
        <div className="round-selection">
          <h1>Select Round</h1>
          <button onClick={() => handleRoundSelection('round1')}>Round 1</button>
          <button onClick={() => handleRoundSelection('round2')}>Round 2</button>
          <button onClick={() => handleRoundSelection('round3')}>Round 3</button>
        </div>
      ) : (
        <div className="main-content">
          <div className="question-list">
            <h2>Questions</h2>
            {questions[selectedRound].map((question) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelection(question)}
              >
                Question {question.id}
              </button>
            ))}
          </div>

          {selectedQuestion && (
            <div className="code-section">
              <div className="timer">
                <h3>Time left: {timeLeft}s</h3>
              </div>
              <h3>Code Snippet for Question {selectedQuestion.id}</h3>
              <div className="code-snippet">
                {selectedQuestion.code.map((line, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={selectedBugs.includes(index)}
                      onChange={() => handleBugSelection(index)}
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
