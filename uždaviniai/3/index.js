const h1 = document.querySelector("#container");

function randomLetters(exclude, lengthas) {
  let text = "";
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_";
  exclude = "!@#$%^&*()_";
  lengthas = 9;
  for (let i = 0; i < lengthas; i++)
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  if (text.includes(!exclude)) {
    console.log(`ojoj`);
  } else return (h1.innerHTML = text);
}
randomLetters();
