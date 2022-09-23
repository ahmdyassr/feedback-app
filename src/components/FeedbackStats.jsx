import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired
}

export default FeedbackStats 