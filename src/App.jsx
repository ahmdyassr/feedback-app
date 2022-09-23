import {useState} from 'react'
import Header from './components/Header'
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
	return (
		<>
			<Header />
			<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
		</>
	)
}

export default App