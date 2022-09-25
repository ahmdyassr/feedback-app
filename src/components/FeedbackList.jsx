import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FeedbackContext } from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => { 
	const { feedback } = useContext(FeedbackContext)

	return (
		
		<AnimatePresence>
			{
				feedback.length > 0 ? (
					feedback.map((item) => {
						const {id, rating, text} = item
						return (
							<motion.div
								key={id}
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
							>
								<FeedbackItem  
									id={id} 
									rating={rating} 
									text={text}
								/>
							</motion.div>
						)
					})
				) : (
					<p>No feedback yet!</p>
				)
			}
		</AnimatePresence>
		
	)
}

export default FeedbackList