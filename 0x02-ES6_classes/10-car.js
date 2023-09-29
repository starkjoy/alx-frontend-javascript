export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newObject = {};
    const cloneSymbol = Symbol('clone'); // Create a new unique symbol
    newObject[cloneSymbol] = {
      _brand: this._brand,
      _motor: this._motor,
      _color: this._color,
    };
    return newObject;
  }
}
