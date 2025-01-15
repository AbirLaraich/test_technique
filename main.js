import { CalibrationCalculator } from './calibrationCalculator.js';

function processCalibrationData(text) {
  const calculator = new CalibrationCalculator(text);
  const totalSum = calculator.calculateTotal();
  const values = calculator.getCalibrationValues();
  
  const resultDiv = document.getElementById('result');
  
  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Ligne</th>
      <th>Valeur</th>
    </tr>
    ${values.map(({line, value}) => `
      <tr>
        <td>${line}</td>
        <td>${value}</td>
      </tr>
    `).join('')}
  `;
  
  resultDiv.innerHTML = `
    <h3>Résultat total: ${totalSum}</h3>
    <div class="values-table">
      ${table.outerHTML}
    </div>
  `;
}

document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => processCalibrationData(e.target.result);
    reader.readAsText(file);
  }
});

document.getElementById('processButton').addEventListener('click', () => {
  const textInput = document.getElementById('textInput').value;
  processCalibrationData(textInput);
});