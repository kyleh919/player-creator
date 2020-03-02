class Player {
  constructor() {
    this.firstName_ = '';
    this.lastName_ = '';
  }

  getFirstName() {
    return this.firstName_;
  }

  setFirstName(firstName) {
    this.firstName_ = firstName;
  }

  getLastName() {
    return this.lastName_;
  }

  setLastName(lastName) {
    this.lastName_ = lastName;
  }
}

const newPlayer = new Player();
