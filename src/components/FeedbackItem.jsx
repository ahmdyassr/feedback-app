import PropTypes from 'prop-types'
import {useContext} from 'react'
import {FeedbackContext} from '../context/FeedbackContext'

const FeedbackItem = ({id, rating, text}) => {
	const { deleteFeedback } = useContext(FeedbackContext)

	return (
		<div className="feedbackItem">
			<div className="feedbackItem__counter">
				{rating}
			</div>
			<p className="feedbackItem__text">
				{text}
			</p>

			<button className="feedbackItem__close" onClick={() => deleteFeedback(id)}>x</button>
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