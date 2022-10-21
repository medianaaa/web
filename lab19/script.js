class Cinema {
  constructor(name, address, number, countOfHalls) {
    this.name = name;
    this.address = address;
    this.number = +number;
    this.countOfHalls = +countOfHalls;
  }
}

const OctoberCinema = new Cinema(
  prompt('name', ''),
  prompt('address', ''),
  prompt('phone number', ''),
  prompt('halls', '')
);

const div = document.querySelector('.root');

let str = JSON.stringify(OctoberCinema);

const p = document.createElement('p');

p.textContent = str;
console.log(p)
div.append(p);

let newObj = JSON.parse(str, (key, value) => {
  if (typeof value !== 'number') {
    return value;
  }

  return undefined;
});
console.log(newObj);

const stringObj = (obj) =>
  `теперь этот объект - ${JSON.stringify(obj)} - строка`;

const str2 = stringObj(newObj);
console.log(str2);

const arr = document.querySelectorAll('p');
console.log(arr);

const p1 = document.createElement('p');

p1.textContent = [...arr].reduce((acc, curr) => acc +('--'+ curr.textContent), '');
console.log(p1.textContent);
document.body.append(p1);
