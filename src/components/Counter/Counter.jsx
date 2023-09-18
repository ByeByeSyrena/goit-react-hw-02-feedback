import {FeedbackOptions} from "../FeedbackOptions/FeedbackOptions"
import { Notification } from "../Notification/Notification"
import { Section } from "../Section/Section"
import { Statistics } from "../Statistics/Statistics"

const Counter = () => (
    <div className="counter">
        <h1>Please leave feedback</h1>

        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>

        <h2>Statistics</h2>

        <span>Good:</span>
        <span>0</span>

        <span>Neutral:</span>
        <span>0</span>

        <span>Bad:</span>
        <span>0</span>

        <span>Positive feedback:</span>
        <span>%</span>

    </div>
)