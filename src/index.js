class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.equation = [this.initialValue];
  }

  valueOf() {
    return eval(this.equation.join(''));
  }

  add(number) {
    this.equation.push('+' + number);
    return this;
  }
  
  subtract(number) {
    this.equation.push('-' + number);
    return this;
  }

  multiply(number) {
    this.equation.push('*' + number);
    return this;
  }

  devide(number) {
    this.equation.push('/' + number);
    return this;
  }

  pow(number) {
    this.equation.push('**' + number);
    return this;
  }
}

module.exports = SmartCalculator;
