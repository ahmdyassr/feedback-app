import PropTypes from 'prop-types'

const Button = ({ children, type, isDisabled }) => {
	return (
		<button className="button" type={type} disabled={isDisabled}>
			{ children }
		</button>
	)
}

Button.defaultProps = {
	type: 'button',
	isDisabled: false
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	isDisabled: PropTypes.bool
}

export default Button