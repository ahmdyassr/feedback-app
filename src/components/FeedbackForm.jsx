import {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import RatingsSelect from './RatingsSelect'

const FeedbackForm = ({handleAdd}) => {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const isFormDisabled = text.trim().length > 5 ? false : true

	const handleChange = (e) => {
		const {value} = e.target
		setText(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const newFeedback = {
			text,
			rating
		}

		handleAdd(newFeedback)
	}
	
	return (
		<form className="feedbackForm" onSubmit={handleSubmit}>
			<h3>How would you rate the service?</h3>
			
			<input className="feedbackForm__input" type="text" placeholder="Write a review" value={text} onChange={handleChange}/>
			<RatingsSelect select={(rating) => setRating(rating)} />
			<Button type="submit" isDisabled={isFormDisabled}>
				Send
			</Button>
		</form>
	)
}

FeedbackForm.propTypes = {
	handleAdd: PropTypes.func.isRequired
}

export default FeedbackForm