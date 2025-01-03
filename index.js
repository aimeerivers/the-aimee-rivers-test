const maths = document.getElementById('maths');
const numberField = document.getElementById('number');
randomMultiplier = Math.floor(Math.random() * 10000000000) + 1;
numberField.value = randomMultiplier * 25561;

function calculate() {
  maths.innerHTML = '';

  let workingOut = document.createElement("table");

  let startingNumber = numberField.value;

  let number = startingNumber.toString();
  let length = number.length;

  while (length >= 11) {
    addRowToTable(workingOut, "Take the 10,000,000,000s, multiply by 19, and add to the rest.");
    let head = number.slice(0, length - 10);
    let tail = number.slice(length - 10);

    let toAdd = (Number(head) * 19);
    number = (Number(tail) + toAdd).toString();
    length = number.length;

    addRowToTable(workingOut, `<s>${head}</s> | ${tail}<br>+ ${toAdd}<br>= ${number}`, `${head}<br>x 19<br>= ${toAdd}`);
  }

  while (length > 5) {
    addRowToTable(workingOut, "Multiply the units by 2556 and subtract.");
    let head = number.slice(0, length - 1);
    let tail = number.slice(length - 1);

    let toSubtract = (Number(tail) * 2556);
    number = (Number(head) - toSubtract).toString();
    length = number.length;

    addRowToTable(workingOut, `${head} | <s>${tail}</s><br>- ${toSubtract}<br>= ${number}`, `${tail}<br>x 2556<br>= ${toSubtract}`);
  }

  maths.appendChild(workingOut);

  let result = (number % 25561 === 0 ? "is" : "is not");
  writeLine(maths, `${number} ${result} divisible by 25561, therefore ${startingNumber} ${result} divisible by 25561.`);
}

calculate();

function addRowToTable(table, ...cells) {
  let row = document.createElement("tr");
  for (let cell of cells) {
    let td = document.createElement("td");
    td.innerHTML = cell;
    row.appendChild(td);
  }
  if (cells.length === 1) {
    row.firstChild.colSpan = 2;
  }
  table.appendChild(row);
}

function writeLine(parent, text) {
  let p = document.createElement("p");
  p.style.fontWeight = "bold";
  p.innerText = text;
  parent.appendChild(p);
}
