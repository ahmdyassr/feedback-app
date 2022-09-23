import {useState} from 'react'

const FeedbackForm = () => {
	const [text, setText] = useState('')

	const handleChange = (e) => {
		const {value} = e.target
		setText(value)
	}

	const handleSubmit = () => {

	}
	
	return (
		<form className="feedbackForm" onSubmit={handleSubmit}>
			<h3>How would you rate the service?</h3>
			
			<input className="feedbackForm__input" type="text" placeholder="Write a review" value={text} onChange={handleChange}/>
			<button className="feedbackForm__button" type="submit">Send</button>
		</form>
	)
}

export default FeedbackForm