export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
<<<<<<< HEAD
    
    evacuationWarningMessage() {
        // Subclasses should provide their implementation
      }
  }
=======

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
>>>>>>> 651ae99677483e54c83b5600642515ac5e860284
