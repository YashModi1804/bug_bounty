import React, { useState, useEffect } from 'react';
import './App.css';
import BugBounty from "./images/Bug-Bounty.webp"


const questions = {
  round1: {
    cpp : [
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
    python : [
      { id: 1, code: ['x = 5;', 'if (x == 10) :', '  print("x is 10")', ' '] },
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
    java : [
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
    c : [
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
    ]
  },
  round2: {
    cpp : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] },
      { id: 3, code: ['let y;', 'console.log(y);', 'y = 20;'] },
      { id: 4, code: ['const a = 5;', 'a = 10;', 'console.log(a);'] },
      { id: 5, code: ['for (let i = 0; i <= 5; i++) {', '  console.log(i);', '}'] }
    ],
    python : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] },
      { id: 3, code: ['let y;', 'console.log(y);', 'y = 20;'] },
      { id: 4, code: ['const a = 5;', 'a = 10;', 'console.log(a);'] },
      { id: 5, code: ['for (let i = 0; i <= 5; i++) {', '  console.log(i);', '}'] }
    ],
    java : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] },
      { id: 3, code: ['let y;', 'console.log(y);', 'y = 20;'] },
      { id: 4, code: ['const a = 5;', 'a = 10;', 'console.log(a);'] },
      { id: 5, code: ['for (let i = 0; i <= 5; i++) {', '  console.log(i);', '}'] }
    ],
    c : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] },
      { id: 3, code: ['let y;', 'console.log(y);', 'y = 20;'] },
      { id: 4, code: ['const a = 5;', 'a = 10;', 'console.log(a);'] },
      { id: 5, code: ['for (let i = 0; i <= 5; i++) {', '  console.log(i);', '}'] }
    ],
  },
  round3: {
    cpp : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}',] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] }
    ],
    python : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] }
    ],
    java : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] }
    ],
    c : [
      { id: 1, code: ['let x = 5;', 'if (x == 10) {', '  console.log("x is 10");', '}'] },
      { id: 2, code: ['let i = 0;', 'while (i < 5) {', '  // Missing increment', '}'] }
    ],
  },
};
const rules = {
  round1 : ["1. In this round you have 10 Code Snippets.", "2. For that you have 30 Minutes.", "3. For each snippet, tick the line where you identify a bug.", "4. Bug can be a syntax or logical error.", "5. You can jump between questions freely within the time frame.", "6. Once you start, fullscreen mode will activate, and you can't exit without submission."],
  round2 : ["1. In this round you have 5 Question.", "2. For that you have 20 Minutes"],
  round3 : ["1. In this round you have 2 Question.", "2. For that you have 10 Minutes"]
}
function App() {
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedBugs, setSelectedBugs] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [showRules , setShowRules] = useState(false);
  const [language , setLanguage] = useState('cpp')

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
    setShowRules(true); 
  };

  const  handleOkClick = () => {
    setShowRules(false);
    setSelectedQuestion(questions[selectedRound][language][0]);
  }

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
    alert(`You selected bugs on lines: ${(selectedBugs).join(', ')}`);
    setSelectedQuestion(null);
  };

  return (
    <div className="app-container">
      
      
      {!selectedRound ? (
        <div style={{display: "flex"}}>
          <div className='side-design'>
            <div className='circle' />
            <div className='line' />
          </div>
        <div className="round-selection">
          <div class='wrapper'>
            <p class="neon-text" data-text="Techvaganza 2024">Techvaganza 2024</p>
          </div>

          <div class="wrapper five">
            <span class="float-box">
                <h3 class="float bug">BUG BOUNTY</h3>
            </span>
         </div>


          <div className='heading'>
            <h4>Powered By <span className='code_assist'>Code Assist</span></h4>
          </div>
          <div>
            <h1 style={{fontFamily : "cursive", marginTop:"0px"}}>Let's Start</h1>
            <button onClick={() => handleRoundSelection('round1')}>Round 1</button>
            <button onClick={() => handleRoundSelection('round2')}>Round 2</button>
            <button onClick={() => handleRoundSelection('round3')}>Round 3</button>
          </div>
        </div>
        <div className='side-design'>
          <div className='circle' />
          <div className='line' />
      </div>
        </div>
      ) : (
        <div >
          
          {showRules ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh', margin: "70px"}}>
              <div><img style={{marginRight: "40px"}} src={BugBounty} alt="#" />
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px', color: 'white', fontWeight:"bold" }}>
        "Unleash your skills and conquer the bugs - the challenge awaits!"
        </p>
          </div>
            <div className="rules-popup">
              <div>
                <h2 style={{textAlign: "center", borderBottom : "2px solid", fontSize:"30px", marginTop:"0"}}>Rules</h2>
                {rules[selectedRound].map((rule,index) => (
                  <p key={index}>{rule}</p>
                ))}
                <p></p>
                <label htmlFor="">
                  Select Language : 
                  <select className='lang' value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c">C</option>
                  </select>
                </label>
              </div>
              <button onClick={handleOkClick}>Start</button>
              </div>
            </div>
          ) : (
            <div className="main-content">
              <div className="question-list">
                <h2>Questions</h2>
                {questions[selectedRound][language].map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionSelection(question)}
                  >
                     {question.id}
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
        
      )}
    </div>
  );
}

export default App;
