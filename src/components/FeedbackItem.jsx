import PropTypes from 'prop-types'

const FeedbackItem = ({id, rating, text, handleDelete}) => {
	return (
		<div className="feedbackItem">
			<div className="feedbackItem__counter">
				{rating}
			</div>
			<p className="feedbackItem__text">
				{text}
			</p>

			<button className="feedbackItem__close" onClick={() => handleDelete(id)}>x</button>
		</div>
	)
}

FeedbackItem.propTypes = {
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	handleDelete: PropTypes.func.isRequired,
}

export default FeedbackItem