const maths = document.getElementById('maths');
const numberField = document.getElementById('number');
randomMultiplier = Math.floor(Math.random() * 10000000000) + 1;
numberField.value = randomMultiplier * 25561;

function calculate() {
  maths.innerHTML = '';

  let startingNumber = numberField.value;

  let number = startingNumber.toString();
  let length = number.length;

  while (length >= 11) {
    writeLine(maths, "Chop off the head")
    let head = number.slice(0, length - 10);
    let tail = number.slice(length - 10);
    writeLine(maths, `${head} | ${tail}`);

    let toAdd = (Number(head) * 19);

    writeLine(maths, tail);
    writeLine(maths, `+ ${toAdd}`);

    number = (Number(tail) + toAdd).toString();
    length = number.length;

    writeLine(maths, `= ${number}`);
  }

  while (length > 5) {
    writeLine(maths, "Chop off the tail");
    let head = number.slice(0, length - 1);
    let tail = number.slice(length - 1);
    writeLine(maths, `${head} | ${tail}`);

    let toSubtract = (Number(tail) * 2556);

    writeLine(maths, head);
    writeLine(maths, `- ${toSubtract}`);

    number = (Number(head) - toSubtract).toString();
    length = number.length;

    writeLine(maths, `= ${number}`);
  }

  let result = (number % 25561 === 0 ? "is" : "is not");
  writeLine(maths, `${number} ${result} divisible by 25561, therefore ${startingNumber} ${result} divisible by 25561.`);
}

calculate();

function writeLine(parent, text) {
  let p = document.createElement("p");
  p.innerText = text;
  parent.appendChild(p);
}
