import React, { Fragment, useState } from 'react';
import './question.scss';

const Question = (props) => {

  // Set state to track which of the 7 radio buttons is currently selected
  const [selected, setSelected] = useState(null);

  return (
    <div className="question">
      <span>{props.prompt}</span>
      <div className="radio-container">
        <span className="danger">Disagree</span>

        {
          [1, 2, 3, 4, 5, 6, 7].map((num, index) => (

            <Fragment key={num}>
              <input 
                type="radio"
                checked={selected === num}
                id={`input-${props.id}-${num}`}

                onChange={() => {

                  // Spread previous answer state and update with new state
                  const updated = {...props.answers};
                  updated[props.id] = num;
                  props.updateAnswers(updated);

                  // Update local state to reflect currently selected radio UI
                  setSelected(num);
                }
              }
              />
              <label htmlFor={`input-${props.id}-${num}`}></label>
            </Fragment>
          ))
        }

        <span className="success">Agree</span>
      </div>
    </div>
  )

};

export default Question;