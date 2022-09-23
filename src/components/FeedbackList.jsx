import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback, handleDelete}) => { 

	return (
		<>
			{
				feedback.length > 0 ? (
					feedback.map((item) => {
						const {id, rating, text} = item
						return (
							<FeedbackItem 
								key={id} 
								id={id} 
								rating={rating} 
								text={text} 
								handleDelete={handleDelete}
							/>
						)
					})
				) : (
					<p>No feedback yet!</p>
				)
			}
		</>
	)
}

FeedbackList.propTypes = {
	feedback: PropTypes.array,
	handleDelete: PropTypes.func
}

export default FeedbackList