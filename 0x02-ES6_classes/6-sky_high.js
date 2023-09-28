import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get getSqft() {
    return this._sqft;
  }

  get getFloors() {
    return this._floors;
  }

<<<<<<< HEAD
	evacuationWarningMessage() {
		return `Evacuate slowly the ${this.floors} floors`;
	}
=======
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
>>>>>>> fb07a16a72042c913490f7086bc80d8ccadb5c09
}
