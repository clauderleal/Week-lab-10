const numbersArray = [];
  function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);   
      numbersArray.push(number);
      numberInput.value = '';
      ShowArray();
      calculateSumAndMean();
  }


  function ShowArray() {
    const arrayOutput = document.getElementById('arrayOutput');
    arrayOutput.textContent = `Array: [${numbersArray.join(', ')}]`;
  }

  function calculateSumAndMean() {
    const sum = numbersArray.reduce((array, num) => array + num, 0);
    const mean = numbersArray.length > 0 ? sum / numbersArray.length : 0;
    // calculate sum
    const sumOutput = document.getElementById('sumOutput');
    sumOutput.textContent = `Sum: ${sum}`;
    // calculate the mean
    const meanOutput = document.getElementById('meanOutput');
    meanOutput.textContent = `Mean: ${mean.toFixed(2)}`;
  }