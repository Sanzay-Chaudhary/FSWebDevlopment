'use client';

import React, { useState } from 'react';
// If you want Bootstrap styles enable the import and install bootstrap in your project
// import 'bootstrap/dist/css/bootstrap.min.css';
import { quiz } from '../questionSet/page';
import ScoreCard from '../scoreCard/page';
import type { Question } from '../questionSet/page';

type Props = {
    name: string;
};

const Quiz = ({ name }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerChecked, setAnswerChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [quizResult, setQuizResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[currentQuestionIndex] as Question;

    const onAnswerSelected = (answer: string, idx: number) => {
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer);
        setAnswerChecked(true);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === correctAnswer) {
            setQuizResult((prev) => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else {
            setQuizResult((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
        }

        if (currentQuestionIndex !== questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setShowResults(true);
        }

        setSelectedAnswer('');
        setSelectedAnswerIndex(null);
        setAnswerChecked(false);
    };

    return (
        <div className="container mt-5">
            <div>
                {!showResults ? (
                    <div className="card p-4">
                        <h4>{question}</h4>
                        <ul className="list-group">
                            {(answers ?? []).map((answer, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => onAnswerSelected(answer, idx)}
                                    className={
                                        'list-group-item ' + (selectedAnswerIndex === idx ? 'active' : '') + ' cursor-pointer'
                                    }
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>

                        <div className="d-flex justify-content-between mt-3">
                            <b>
                                Question {currentQuestionIndex + 1}/{questions.length}
                            </b>

                            <button onClick={handleNextQuestion} className="btn btn-primary" disabled={!answerChecked}>
                                {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next Question'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <ScoreCard quizResult={quizResult} questions={questions as Question[]} name={name} />
                )}
            </div>
        </div>
    );
};

export default Quiz;