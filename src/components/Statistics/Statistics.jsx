import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<div className={css.spansWrapper}>
        <div className={css.spansElement}>
            <span className={css.condition}>Good:</span>
            <span className={css.amount}>{good}</span>
        </div>
        <div className={css.spansElement}>
            <span className={css.condition}>Neutral:</span>
            <span className={css.amount}>{neutral}</span>
        </div>
        <div className={css.spansElement}>
            <span className={css.condition}>Bad:</span>
            <span className={css.amount}>{bad}</span>
        </div>
        <div className={css.spansElement}>
            <span className={css.condition}>Total:</span>
            <span className={css.amount}>{total}</span>
        </div>
        <div className={css.spansElement}>
            <span className={css.condition}>Positive feedback:</span>
            <span className={css.amount}>{positivePercentage}%</span>
        </div>
    </div>);
};

export default Statistics;