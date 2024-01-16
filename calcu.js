// Button Values
const buttonValues = [
  ['1','2','3','÷'],
  ['4','5','6','x'],
  ['7','8','9','-'],
  ['0','.','=','+']
];

// Button Functions and Event Handlers
function createButton(value) {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = value;
  button.onclick = function() {
    if (value === '=') {
      solve(); 
      } else {
        dis(value);
      }
  };
  return button;
}

// Generating Buttons
for (const rowValues of buttonValues) {
  const row = document.createElement('tr');
  for (const value of rowValues) {
    const cell = document.createElement('td');
    cell.appendChild(createButton(value));
    row.appendChild(cell);
  }
  document.getElementById('calculator').appendChild(row);
}