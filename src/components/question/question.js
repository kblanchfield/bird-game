import React, { useState, useEffect, useContext } from "react"
import { questionContext } from "../../contexts/question-context"
import "./question.scss"

const Question = ({ bird, answer }) => {

  const emptyAnswer = '______'
  const { questionIndex, questionAnsweredCorrectly } = useContext(questionContext)
  const [revealedAnswer, setRevealedAnswer] = useState(emptyAnswer)
  const [definiteArticle, setDefiniteArticle] = useState('A')

  useEffect(() => {
    setDefiniteArticle('A')
  }, [questionIndex])

  useEffect(() => {
    if (questionAnsweredCorrectly === true) {
      const correctDefiniteArticle = getDefiniteArticle(answer)
      setDefiniteArticle(correctDefiniteArticle)
      setRevealedAnswer(answer)
    } else {
      setRevealedAnswer(emptyAnswer)
    }
  }, [answer, questionAnsweredCorrectly])

  const getDefiniteArticle = (answer) => {
    const letters = ['a', 'e', 'i', 'o', 'u']
    if (letters.includes(answer[0])) {
      return 'An'
    }
    return "A"
  }

  return (
    <div className="question-title">
      <h2>{definiteArticle} <span className="revealed-answer">{revealedAnswer}</span></h2>
      <br />
      <h2>of {bird}</h2>
    </div>
  )
}

export default Question