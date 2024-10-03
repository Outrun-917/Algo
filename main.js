function addition(a, b) {
  // Écrire le code ici
  return a + b;
}
console.log(addition(2, 3)); // Résultat attendu : 5

function salutation(nom) {
  // Écrire le code ici
  return "Bonjour " + nom;
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

function estPair(nombre) {
  // Écrire le code ici
  if (nombre % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false

// Écrire le code ici
function aireRectangle(longueur, largeur) {
  return longueur * largeur;
}

console.log(aireRectangle(5, 3)); // Résultat attendu : 15

// Écrire le code ici
function estMajuscule(char) {
  if (char == char.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

// Écrire le code ici
function maxDeuxNombres(chiffreUn, chiffreDeux) {
  return Math.max(chiffreUn, chiffreDeux);
}

console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

// Écrire le code ici
function difference(chiffreUn, chiffreDeux) {
  const plusGrosChiffre = Math.max(chiffreUn, chiffreDeux);
  const plusPetitChiffre = Math.min(chiffreUn, chiffreDeux);
  return plusGrosChiffre - plusPetitChiffre;
}

console.log(difference(10, 3)); // Résultat attendu : 7

function convertirEnCelsius(fahrenheit) {
  // Écrire le code ici
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

function estMajeur(age) {
  // Écrire le code ici
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false

function maxTroisNombres(a, b, c) {
  // Écrire le code ici
  return Math.max(a, b, c);
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

function calculer(a, b, operation) {
  // Écrire le code ici
  return operation(a, b);
}
function addition(x, y) {
  return x + y;
}
function multiplication(x, y) {
  return x * y;
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15
