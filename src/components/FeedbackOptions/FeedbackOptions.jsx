import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttonsWrapper}>
    <button className={css.button} type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button className={css.button} type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button className={css.button} type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
