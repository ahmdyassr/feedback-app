import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Feedback from './pages/Feedback'


const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Feedback />} />
				<Route path="/about" element={<About />}/>
			</Routes>
		</Router>
	)
}

export default App