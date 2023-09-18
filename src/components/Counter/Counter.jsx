import React from 'react';

import css from './Counter.module.css'

import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions"
import { Notification } from "../Notification/Notification"
import { Section } from "../Section/Section"
import { Statistics } from "../Statistics/Statistics"

export class Counter extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    addGoodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        }
        );
    };

    addNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.good + 1,
            }
        }
        );
    };

    addBadFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.good + 1,
            }
        }
        );
    };

    countTotalFeedback = () => {
        console.log("click")
    };

    countPositiveFeedbackPercentage = () => {};
    
    render() {
        return (
            <div className={css.counter}>
                <h1 className={css.firstHeadline}>Please leave feedback</h1>
<div className={css.buttonsWrapper}>
                    <button className={css.button}
                        type="button"
                        onClick={this.addGoodFeedback}>Good</button>
                    <button className={css.button}
                        type="button"
                    onClick={this.addNeutralFeedback}>Neutral</button>
                    <button className={css.button}
                        type="button"
                    onClick={this.addBadFeedback}>Bad</button>
</div>
                <h2 className={css.secondHeadline}>Statistics</h2>

                <span className={css.condition}>Good:</span>
                <span className={css.amount}>{this.state.good}</span>

                <span className={css.condition}>Neutral:</span>
                <span className={css.amount}>{this.state.neutral}</span>

                <span className={css.condition}>Bad:</span>
                <span className={css.amount}>{this.state.bad}</span>

                <span className={css.condition}>Total:</span>
                <span className={css.amount}>0</span>

                <span className={css.condition}>Positive feedback:</span>
                <span className={css.amount}>%</span>

            </div>
        );
    }
}
