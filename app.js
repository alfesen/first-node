const fs = require('fs');

console.log(fs);

const genders = ['M', 'F'];
const maleNames = [
  'Matthew',
  'Mark',
  'Luke',
  'John',
];
const femaleNames = [
  'Ann',
  'Elizabeth',
  'Mary',
  'Ruth',
];
const lastNames = [
  'Watson',
  'Trent',
  'Owen',
  'Gurnall',
  'Edwards',
  'Baxter',
];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (loop = 0; loop < 20; loop++) {
  const chosenGender = randChoice(genders);
  let personName = '';
  if(chosenGender == 'M'){
    personName = randChoice(maleNames);
  } else {
    personName = randChoice(femaleNames);
  }
  const chosenLastName = randChoice(lastNames);

  const person = {
    gender: chosenGender,
    name: personName,
    lastName: chosenLastName,
  }

  people.push(person);
};

const toJSON = JSON.stringify(people);

fs.writeFile('people.json', toJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});