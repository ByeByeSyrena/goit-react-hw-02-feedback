import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.buttonsWrapper}>
    {options.map(option => (
      <button
        key={option.name}
        className={css.button}
        type="button"
        onClick={() => onLeaveFeedback(option.name)}
      >
        {option.name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
