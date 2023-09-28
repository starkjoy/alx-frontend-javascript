export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get getCode() {
    return this._code;
  }

  get getName() {
    return this._name;
  }

  set setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Wrong Code');
    }
  }

  set setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Wrong Name');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // Corrected the format here
  }
}
