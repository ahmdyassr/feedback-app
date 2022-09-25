import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import data from '../db.json'

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(data?.feedback)

	// Delete feedback
	const deleteFeedback = (id) => {
		const isConfirmed = window.confirm('Are you sure you wanna delete?')

		if (isConfirmed) {
			const filteredList = feedback.filter((item) => item.id !== id)
			setFeedback(filteredList)
		}
	}

	// add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<FeedbackContext.Provider value={{
			feedback,
			deleteFeedback,
			addFeedback
		}}>
			{children}
		</FeedbackContext.Provider>
	)
}

FeedbackProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export {
	FeedbackContext,
	FeedbackProvider
}