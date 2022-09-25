import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback, handleDelete}) => { 

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
									handleDelete={handleDelete}
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

FeedbackList.propTypes = {
	feedback: PropTypes.array,
	handleDelete: PropTypes.func
}

export default FeedbackList