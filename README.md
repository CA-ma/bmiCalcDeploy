# Challenge: Body Mass Index (BMI) Caclulator
Developed and documented by,
* Aubain, Max - [Github](https://github.com/CA-ma)

## Summary
This repository contains a code base for a Body Mass Index (BMI) calculator web app.  A BMI calculator<sup>1</sup> returns an 'index' value based on the height and weight of an individual.  The 'index' is proportional to the ratio of weight to height, so as weight increases and/or height decreases, the 'index' will increase.  [According to the Department of Health & Human Services](https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm), a U.S. Government agency, the 'index' value correlates to the following conditions:

```
Underweight = less than 18.5
Normal weight = 18.5 to 24.9 
Overweight = 25 to 29.9 
Obesity = 30 or greater
```

<sup>1</sup>A BMI Calculator assumes a particular 'average' body type and is not necessarily an accurate measure of any individual person's body fat percentage, nor is it an accurate measure of one's general health. It is simply an 'index' correlated to the occurance of certain diseases such as heart disease. Therefore, it is only a relative guide.  Personal health decisions should be made with the feedback of a licensed medical professional.

The methods that govern the BMI calculator app are developed with Javascript and styled in the view with HTML and vanilla CSS options.  The methods and features of the calculator are tested using a package called [End To End Training Wheels](https://www.npmjs.com/package/e2e_training_wheels), which is a lightweight JS testing framework that can implement both unit and feature tests.

### Technology summary
**Front end**
* HTML
* CSS
* JS

**Back end**
* N/A

**Testing**
* End-to-end (e2e) Training Wheels: unit and feature

## Deployment
The [BMI web app](https://ca-ma.github.io/bmiCalcDeploy/) is deployed using Github Pages.

## Building the project
### Goals

### Local Setup
To locally run or test this application, fork this repository to your github account and clone to a local workspace.  The following instructions will configure your local workspace with the necessary package manager and packages.  You can refer to the e2e Training Wheels installation [here](https://www.npmjs.com/package/e2e_training_wheels#installation).

```
// Initialize Node Package Manager (NPM)

$ npm init   

// Install e2e Training Wheels

$ npm i e2e_training_wheels --save-dev          
$ node ./node_modules/e2e_training_wheels/dist/install.js

// Run feature and unit tests sequentially

$ npm test
```

### Testing

## Acknowledgements
Thank you to Craft Academy in Stockholm, Sweden for crafting this challenge.