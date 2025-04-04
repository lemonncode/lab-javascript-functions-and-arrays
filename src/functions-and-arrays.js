// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

console.log(maxOfTwoNumbers(10, 5));

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) return null; // Si el array está vacío, retornamos null

  let longestWord = words[0]; // Asumimos que la primera palabra es la más larga

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]; // Si encontramos una palabra más larga, la actualizamos
    }
  }

  return longestWord;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) return 0; // Si el array está vacío, retornamos 0

  let sum = 0; // Inicializamos la suma en 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Sumamos cada número del array
  }

  return sum; // Retornamos la suma total
}



// Iteration #3.1 Bonus:
function sum(arr) {
  if (arr.length === 0) return 0; // Si el array está vacío, retornamos 0

  let total = 0; // Inicializamos la suma

  for (let item of arr) {
    if (typeof item === "number") {
      total += item; // Sumamos los números directamente
    } else if (typeof item === "string") {
      total += item.length; // Sumamos la longitud de los strings
    } else if (typeof item === "boolean") {
      total += item ? 1 : 0; // true cuenta como 1, false como 0
    } else {
      throw new Error("Unsupported data type"); // Error si hay un objeto o array
    }
  }

  return total;
}





// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) return null; // Si el array está vacío, retorna null

  let sum = numbers.reduce((total, num) => total + num, 0); // Sumamos todos los elementos
  return sum / numbers.length; // Dividimos la suma entre la cantidad de elementos
}



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words.length === 0) return null; // Si el array está vacío, retorna null

  let totalLength = words.reduce((total, word) => total + word.length, 0); // Sumamos las longitudes
  return totalLength / words.length; // Dividimos entre la cantidad de palabras
}


// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) return null; // Si el array está vacío, retorna null

  let sum = 0; // Inicializamos la suma
  let count = arr.length; // Contamos los elementos

  for (let item of arr) {
    if (typeof item === "number") {
      sum += item;
    } else if (typeof item === "string") {
      sum += item.length; // Sumamos la longitud del string
    } else if (typeof item === "boolean") {
      sum += item ? 1 : 0; // true = 1, false = 0
    }
  }

  return sum / count; // Calculamos el promedio
}


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {
  if (arr.length === 0) return null; // Si el array está vacío, retorna null

  return [...new Set(arr)]; // Usamos un Set para eliminar duplicados y lo convertimos en array
}




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length === 0) return null; // Si el array está vacío, retorna false

  return arr.includes(word); // Usa el método includes() para verificar si el elemento está presente
}




// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  if (arr.length === 0) return 0; // Si el array está vacío, retorna 0

  return arr.filter((item) => item === word).length; // Filtramos los elementos que coinciden con 'word' y contamos la cantidad
}

console.log(howManyTimes(wordsCount, 'matter')); // 4



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let maxProduct = 0;

  // Recorremos todas las filas
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Horizontal (hacia la derecha)
      if (j + 3 < matrix[i].length) {
        const horizontalProduct =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }

      // Vertical (hacia abajo)
      if (i + 3 < matrix.length) {
        const verticalProduct =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }

      // Diagonal (hacia abajo y derecha)
      if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
        const diagonalProduct =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];
        maxProduct = Math.max(maxProduct, diagonalProduct);
      }

      // Diagonal (hacia abajo y izquierda)
      if (i + 3 < matrix.length && j - 3 >= 0) {
        const diagonalProductLeft =
          matrix[i][j] *
          matrix[i + 1][j - 1] *
          matrix[i + 2][j - 2] *
          matrix[i + 3][j - 3];
        maxProduct = Math.max(maxProduct, diagonalProductLeft);
      }
    }
  }

  return maxProduct;
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
