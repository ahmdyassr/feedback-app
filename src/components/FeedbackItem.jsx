import PropTypes from 'prop-types'
import {useContext} from 'react'
import {FeedbackContext} from '../context/FeedbackContext'

const FeedbackItem = ({id, rating, text}) => {
	const { editFeedback, deleteFeedback } = useContext(FeedbackContext)

	return (
		<div className="feedbackItem">
			<div className="feedbackItem__counter">
				{rating}
			</div>
			<p className="feedbackItem__text">
				{text}
			</p>

			<button className="feedbackItem__close" onClick={() => deleteFeedback(id)}>x</button>
			<button className="feedbackItem__edit" onClick={() => editFeedback({
				id,
				rating,
				text
			})}>Edit</button>
		</div>
	)
}

FeedbackItem.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	rating: PropTypes.number,
	text: PropTypes.string,
}

export default FeedbackItem