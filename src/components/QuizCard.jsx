"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

const QuizCard = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const isCorrect = selectedAnswer === correctAnswer

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <div className="space-y-2 mb-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              selectedAnswer === option ? "bg-mint text-teal" : "bg-light hover:bg-light/70"
            }`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>
      {!showResult && (
        <button onClick={handleSubmit} className="btn-primary w-full" disabled={!selectedAnswer}>
          Submit Answer
        </button>
      )}
      {showResult && (
        <div className={`mt-4 p-3 rounded-md ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
          {isCorrect ? (
            <div className="flex items-center text-green-700">
              <CheckCircle size={20} className="mr-2" />
              <span>Correct! Well done.</span>
            </div>
          ) : (
            <div className="flex items-center text-red-700">
              <XCircle size={20} className="mr-2" />
              <span>Incorrect. The correct answer is: {correctAnswer}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QuizCard

