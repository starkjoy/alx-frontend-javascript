import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get getAmount() {
    return this._amount;
  }

  get getCurrency() {
    return this._currency;
  }

  set setAmount(amount) {
    if (typeof amount === "number") {
      this._amount = amount;
    } else {
      throw new TypeError("Wrong amount");
    }
  }

  set setCurrency(currency) {
    if (currency instanceof Currency) { // Check if currency is an instance of Currency
      this._currency = currency;
    } else {
      throw new TypeError("Wrong Currency");
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.getName()} (${this._currency.getCode()})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
  }
}
