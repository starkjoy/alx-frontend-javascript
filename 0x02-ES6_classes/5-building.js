class Building {
    constructor(sqft) {
      this._sqft = sqft;
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method: evacuationWarningMessage
    evacuationWarningMessage() {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
  