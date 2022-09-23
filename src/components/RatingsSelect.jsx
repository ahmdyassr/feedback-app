import {useState} from 'react'
import PropTypes from 'prop-types'

const RatingsSelect = ({ select }) => {
	const [selected, setSelected] = useState(5)

	const handleChange = (e) => {
		const {value} = e.target
		select(parseInt(value))
		setSelected(parseInt(value))
	}

	return (
		<div className="ratingSelect">
			<div className="ratingSelect__item">
				<input className="ratingSelect__number" type="radio" id="1" name="rating" value="1" checked={selected === 1} onChange={handleChange}/>
				<label className="ratingSelect__label" htmlFor="1">1</label>
			</div>

			<div className="ratingSelect__item">
				<input className="ratingSelect__number" type="radio" id="2" name="rating" value="2" checked={selected === 2} onChange={handleChange}/>
				<label className="ratingSelect__label" htmlFor="2">2</label>
			</div>

			<div className="ratingSelect__item">
				<input className="ratingSelect__number" type="radio" id="3" name="rating" value="3" checked={selected === 3} onChange={handleChange}/>
				<label className="ratingSelect__label" htmlFor="3">3</label>
			</div>

			<div className="ratingSelect__item">
				<input className="ratingSelect__number" type="radio" id="4" name="rating" value="4" checked={selected === 4} onChange={handleChange}/>
				<label className="ratingSelect__label" htmlFor="4">4</label>
			</div>

			<div className="ratingSelect__item">
				<input className="ratingSelect__number" type="radio" id="5" name="rating" value="5" checked={selected === 5} onChange={handleChange}/>
				<label className="ratingSelect__label" htmlFor="5">5</label>
			</div>
		</div>
	)
}

RatingsSelect.propTypes = {
	select: PropTypes.func.isRequired
}

export default RatingsSelect