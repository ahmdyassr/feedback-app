import { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackContext'

const FeedbackStats = () => {
	const { feedback } = useContext(FeedbackContext)
	const avgRatings = Math.round( feedback.reduce( (prev, current) => {
		return prev + current.rating
	}, 0) / feedback.length )

	return (
		<div className="feedbackStats">
			<span className="feedbackStats__card">
				<p>Reviews: </p>
				<h3>{ feedback.length }</h3>
			</span>
			<span className="feedbackStats__card">
				<p>Average Rating: </p>
				<h3>{ isNaN(avgRatings) ? 0 : avgRatings }</h3>
			</span>
		</div>
	)
}

export default FeedbackStats 