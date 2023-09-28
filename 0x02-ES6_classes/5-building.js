export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get getSqft() {
    return this._sqft;
  }

  set setSqft(sqft) {
    throw new Error("Property 'sqft' is read-only.");
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
