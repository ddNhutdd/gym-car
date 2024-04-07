import { listCar } from '../../data/list-card.js';
import { listColor } from '../../data/color.js';
import { useState } from 'react';

const Car = function () {

	const [selectedCar, setSelectedCar] = useState(listCar.at(0));
	const [selectedColor, setSelectedColor] = useState(listColor.at(0));

	const renderListCar = () => listCar.map(item => (<option key={item} value={item}>{item}</option>));
	const renderListColor = () => listColor.map(item => <option key={item} value={item}>{item}</option>);

	const carChangeHandle = (value) => setSelectedCar(value.target.value);
	const colorChangeHandle = (value) => setSelectedColor(value.target.value);

	return (<div className='container mt-5'>
		<div className='row'>
			<h1 className='col-12'>Select your car</h1>

			<div className="form-floating">
				<select
					onChange={carChangeHandle}
					className="form-select mb-2"
					id="cars"
				>
					{renderListCar()}
				</select>
				<label htmlFor="cars">Select your car</label>
			</div>

			<div className="form-floating">
				<select
					onChange={colorChangeHandle}
					className="form-select mb-2"
					id="colors"
				>
					{renderListColor()}
				</select>
				<label htmlFor="colors">Select your color</label>
			</div>

			<div>Your choose: {selectedCar} - {selectedColor}</div>
		</div>
	</div>);

}

export default Car;