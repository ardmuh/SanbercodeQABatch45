/*
Ardi Muhammad

Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
 - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
 - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
 Hint : gunakan rumus sqrt(x)
 */
console.log('='.repeat(10)+' Program Akar Pangkat 2 dari Bilangan Genap '+'='.repeat(10));

const prompt = require('prompt-sync')({ sigint: true });
const inputNumber = prompt('Silakan input bilangan yang anda diinginkan (x):');
const number = parseInt(inputNumber);

if (isNaN(number)) {
  console.log('Input harus berupa angka');
} else if (number < 0) {
  console.log('Tidak bisa input bilangan negatif');
} else if (number % 2 !== 0) {
  console.log('Tidak bisa input bilangan ganjil');
} else {
  const result = Math.sqrt(number);
  console.log(`Akar pangkat 2 dari ${number} adalah ${result}`);
}

console.log('='.repeat(10)+' Terima Kasih '+'='.repeat(10));
