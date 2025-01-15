import { CalibrationCalculator } from './calibrationCalculator.js';

const input = document.getElementById('document-content').textContent;
const calculator = new CalibrationCalculator(input);
const totalSum = calculator.calculateTotal();

console.log(`La somme totale des valeurs d'étalonnage est : ${totalSum}`);

const calibrationValues = calculator.getCalibrationValues();
console.log(`'Valeurs d'étalonnage individuelles :', calibrationValues`);