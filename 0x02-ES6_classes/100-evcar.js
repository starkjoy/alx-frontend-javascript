import Car from './10-car'; // Corrected import statement

export default class EVCar extends Car {
	constructor(brand, motor, color, range) {
		super(brand, motor, color); // Call the superclass constructor with the necessary parameters
		this._range = range;
	}

	cloneCar() {
		const carClone = super.cloneCar(); // Call the parent class's cloneCar method
		return carClone;
	}
}
