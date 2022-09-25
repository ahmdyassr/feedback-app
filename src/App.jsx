import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import About from './pages/About'
import Feedback from './pages/Feedback'


const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Feedback />} />
					<Route path="/about" element={<About />}/>
				</Routes>
			</Router>
		</FeedbackProvider>
	)
}

export default App