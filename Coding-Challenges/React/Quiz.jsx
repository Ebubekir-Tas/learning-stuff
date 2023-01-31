import React, { useState, useEffect, useCallback } from 'react';

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

export default function Quiz() {
  const quiz = useQuiz();
  const [userSelection, setUserSelection] = useState([]);
  const [step, setStep] = useState(0)
  const getClassName = useCallback((index) => {
    if (userSelection[step] === quiz[step]?.correctAnswer && userSelection[step] === index){
      return 'answer correct'
    }
    if (userSelection[step] !== quiz[step]?.correctAnswer && userSelection[step] === index) {
      return 'answer incorrect'
    }
    return 'answer'
  }, [step, userSelection])

  const selectAnswer = (index) =>{
    if (userSelection[step] === undefined) {
      setUserSelection(userSelection => [...userSelection, index])
    }
  }

  /*
    answer: not selected,
    answer correct: selected, correctAnswer === selectedAnswerIndex
    answer incorrect: selected, correctAnswer !== selectedAnswerIndex
  */
  return (
    <>
      {JSON.stringify(userSelection)}
      <h1>{quiz[step]?.question}</h1>
      {quiz[step]?.answers.map((answer, index)=>{
      const classes = getClassName(index)
      return (
        <h2
          key={answer}
          onClick={() => selectAnswer(index)}
          className={classes || 'answer'}
        >
          {answer}
        </h2>
        )})
      }
      <button
        onClick={()=>{
          setStep(step-1)
        }}
        disabled={step === 0}
      >
        Back
      </button>
      <button
        onClick={()=> {
          setStep(step+1)
        }}
        disabled={
        step === 0 && userSelection[0] === undefined || 
        step === 1 && userSelection[1] === undefined ||
        step === 2
        }
      >
        Next
      </button>
    </>
  );
}

const useQuiz = () => {
  const [quiz, setQuiz] = useState([])
  useEffect(()=>{
    const fetcher = () => {
      const fetchQuiz = fetch(QUIZ_API_BASE_URL).then(res => res.json()).then(value=>{
        setQuiz(value)
    })
  }
    fetcher();
  }, [])
  return quiz
}