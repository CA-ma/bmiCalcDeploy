function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.calculateBmi = function () {
    calculator = new BMICalculator();
    calculator.metricBmi(this)
  }

  Person.prototype.calculateImperialBmi = function () {
    calculator = new BMICalculator();
    calculator.imperialBmi(this);
  };
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Person;
} 