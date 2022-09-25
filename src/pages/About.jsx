import {Link} from 'react-router-dom'

const About = () => {
	return (
		<>
			<h3>About</h3>
			<p>This is version 1.0 of the React project!</p>
			<Link to="/">Back Home</Link>
		</>
	)
}

export default About