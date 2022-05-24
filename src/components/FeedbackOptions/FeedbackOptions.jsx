import React from "react";
import './FeedbackOptions.css';

const FeedbackOptions = ({onLeaveFeedbackGood,onLeaveFeedbackNeutral,onLeaveFeedbackBad}) => (
            <ul className="Feedback__buttons">
          <li>
            <button
              className="Good"
              type="button"
              onClick={onLeaveFeedbackGood}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className="Neutral"
              type="button"
              onClick={onLeaveFeedbackNeutral}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className="Bad"
              type="button"
              onClick={onLeaveFeedbackBad}
            >
              Bad
            </button>
          </li>
        </ul>
)

export default FeedbackOptions;