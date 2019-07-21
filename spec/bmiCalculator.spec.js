require('../spec/spec.helper')

describe('BMICalculator', () => {
  let bmiCalculator
  let person

  beforeEach(() => {
    person = new Person({ weight: 90, height: 186 });
    bmiCalculator = new BMICalculator();
  });

  it('calculates BMI for a person using metric method', () => {
    bmiCalculator.metricBmi(person)
    expect(person.bmiValue).to.eql(26.01)
  })
})