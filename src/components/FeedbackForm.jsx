import {useState} from 'react'
import Button from '../components/Button'
import RatingsSelect from './RatingsSelect'
import { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackContext'

const FeedbackForm = () => {
	const { addFeedback } = useContext(FeedbackContext)
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

		addFeedback(newFeedback)
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

export default FeedbackForm