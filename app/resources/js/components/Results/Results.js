import React, { useState, useEffect } from 'react';
import './results.scss';
import axios from 'axios';

const Results = (props) => {

  const [result, setResult] = useState('ISFJ');

  useEffect(() => {

    // Fetch results from API by id passed down from App
    axios.get(`http://localhost:8000/api/quizzes/${props.id}`)
      .then(res => {
        setResult(res.data.result);
      });
  });


  return (
    <section>
      <div className="results-container">
        <div className="results-description">
          <h1>Your Perspective</h1>
          <p>Your Perspective Type is {result}.</p>
        </div>

        <div className="results-data-outer">
          <div className="results-data-inner">
            <div className="results-left">
              <span>Introversion (I)</span>
              <span>Sensing (S)</span>
              <span>Thinking (T)</span>
              <span>Judging (J)</span>
            </div>
            <div className="results-center">
              <span className={result.split('')[0].toLowerCase() === 'i' ? 'left' : 'right'}></span>
              <span className={result.split('')[1].toLowerCase() === 's' ? 'left' : 'right'}></span>
              <span className={result.split('')[2].toLowerCase() === 't' ? 'left' : 'right'}></span>
              <span className={result.split('')[3].toLowerCase() === 'j' ? 'left' : 'right'}></span>
            </div>
            <div className="results-right">
              <span>Extraversion (E)</span>
              <span>Intuition (N)</span>
              <span>Feeling (F)</span>
              <span>Perceiving (P)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results;