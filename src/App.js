import { useState } from "react";
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Ishay" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); // while passing an argument it will work once , while passing a callback we can update multiple times
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1); // changed to callback function
    //setTest({ name: "fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
              // onMouseEnter={() => alert("test")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const messages = [
  "Learn react😊",
  "Apply for jobs💼 ",
  "Invest your new income😊",
];
