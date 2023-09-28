export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
<<<<<<< HEAD
  
    get sqft() {
      return this._sqft;
    }
  }
  
=======

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // Subclasses should provide their implementation
  }
}
>>>>>>> 2f64dd609d0628744eae724981374019fe39faa7
