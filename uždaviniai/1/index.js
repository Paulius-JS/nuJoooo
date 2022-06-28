let myName = "Paulius";
let lastName = "Petrunin";
let age = 1993;
let years = 2022;

const h1 = document.querySelector("#container");

function CreateContent() {
  return (h1.innerHTML = `Aš esu ${myName} ${lastName}. Man yra ${
    years - age
  } metai(ų)`);
}

CreateContent();
