import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		isEdit: false
	})

	useEffect(() => {
		fetchFeedback()
	}, [])

	// Fetch Feedback
	const fetchFeedback = async () => {
		const response = await fetch('/api/feedback')
		const data = await response.json()
		setFeedback(data?.feedback)
		setIsLoading(false)
	}

	// Add feedback
	const addFeedback = async (newFeedback) => {
		newFeedback.id = uuidv4()

		const response = await fetch('/api/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFeedback)
		})

		const data = await response.json()
		setFeedback([data, ...feedback])
	}

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			isEdit: true
		})
	}

	// Update Feedback
	const updateFeedback = (id, updItem) => {
		const updatedFeedback = feedback.map((item) => {
			if (item.id === id) {
				item = {...item, ...updItem}
			}

			return item
		})
		setFeedback(updatedFeedback)
	}

	// Delete feedback
	const deleteFeedback = (id) => {
		const isConfirmed = window.confirm('Are you sure you wanna delete?')

		if (isConfirmed) {
			const filteredList = feedback.filter((item) => item.id !== id)
			setFeedback(filteredList)
		}
	}

	return (
		<FeedbackContext.Provider value={{
			feedback,
			addFeedback,
			editFeedback,
			updateFeedback,
			deleteFeedback,
			feedbackEdit,
			isLoading
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