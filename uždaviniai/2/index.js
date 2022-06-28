// Sugeneruokite 6 kintamuosius kurių reikšmės būtų atsitiktiniai
//  skaičiai nuo 1000 iki 9999.
//  Atspausdinkite reikšmes viename strige, išrūšiuotas nuo
// didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir
// masyvų NEGALIMA.

let string = "";
let conn = ",";

let h1 = document.querySelector("#container");

function generateRandom() {
  return Math.floor(Math.random() * (9999 - 1000));
}

let one = generateRandom();
let two = generateRandom();
let three = generateRandom();
let four = generateRandom();
let five = generateRandom();
let six = generateRandom();

h1.innerHTML = `${one} ${two} ${three} ${four} ${five} ${six}`;
