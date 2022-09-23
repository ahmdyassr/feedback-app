import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import data from './db.json'

const App = () => {
	const [feedback, setFeedback] = useState(data.feedback)

	const deleteFeedback = (id) => {
		const isConfirmed = window.confirm('Are you sure you wanna delete?')

		if (isConfirmed) {
			const filteredList = feedback.filter((item) => item.id !== id)
			setFeedback(filteredList)
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<>
			<Header />
			<FeedbackForm handleAdd={addFeedback} />
			<FeedbackStats feedback={feedback} />
			<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
		</>
	)
}

export default App