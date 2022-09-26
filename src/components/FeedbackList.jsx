import { useContext } from 'react'
//import { motion, AnimatePresence } from 'framer-motion'
import {SpinnerCircular} from 'spinners-react'
import { FeedbackContext } from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => { 
	const { isLoading, feedback } = useContext(FeedbackContext)

	if (!isLoading && (!feedback || feedback.length === 0)) {
		return (
			<>
				<p>No Feedback Yet!</p>
			</>
		)
	}

	return (
		<>
			{ 
				isLoading ? 
					( <SpinnerCircular color='blue' /> ) : (
						feedback.map((item) => {
							const {id, rating, text} = item
							return (
								<FeedbackItem
									key={id}
									id={id}
									rating={rating} 
									text={text}
								/>
							)
						})
					)
			}
		</>
	)
}

export default FeedbackList