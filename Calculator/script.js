function append(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const expression = document.getElementById('display').value
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/\^/g, '**');
  
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (err) {
      document.getElementById('display').value = 'Error';
    }
  }
  
