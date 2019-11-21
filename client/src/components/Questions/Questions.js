import React, { useState, useEffect } from 'react';
import Question from './Question';
import questions from '../../data/questions.json';

const Questions = (props) => {

  // Set initial states for answers, email value and errors
  const [answers, setAnswers] = useState({1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null });
  const [email, setEmail] = useState('');
  const [questionError, setQuestionError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // If any answer values are null, update state accordingly
  const checkForAllAnswers = () => {
    let nullAnswers = false;

    for (const answer in answers) {
      if (answers[answer] === null) {
        nullAnswers = true;
      }
    }

    nullAnswers === false ? setQuestionError(false) : setQuestionError(true);
  }

  // Check for valid email (realistically only checking for length in this case)
  const checkForValidEmail = () => email.length === 0 ? setEmailError(true) : setEmailError(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    checkForAllAnswers();
    checkForValidEmail();
    setHasSubmitted(true);
  }

  useEffect(() => {

    /**
     * 
     * Handle logic POST logic to API and conditionally redirect to /results
     */

    if (!questionError && !emailError && hasSubmitted) {
      props.history.push('/results');
    }
    
  });

  return (
    <section>

      <header>
        <h1>Discover your Perspective</h1>
        <p>Complete the 7 min test and get a detailed report of your lenses on the world.</p>
      </header>

      <form>
        {
          questions.map((question) => (
            <Question 
              prompt={question.value} 
              key={question.questionId} 
              answers={answers}
              id={question.questionId}
              updateAnswers={setAnswers}
            />
          ))
        }
        
        <div className="email-container">
          <label htmlFor="email">Your Email</label>
          <input name="email" type="email" value={email} placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />

          { emailError ? <span className="submission-error">Please enter a valid email.</span> : '' }
          { questionError ? <span className="submission-error">Please answer all questions.</span> : '' }
          
        </div>
        <button onClick={onSubmit}>Save &amp; Continue</button>
      </form>
    </section>
  );
}

export default Questions;
