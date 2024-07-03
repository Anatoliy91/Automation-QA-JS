function getTopSalary(people) {
  let maxSalary = 0;
  let topPerson = '';

  for (let [name, salary] of Object.entries(people)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topPerson = name;
    }
  }

  return topPerson;
}

let people = { "Іван": 100, "Петро": 300, "Марія": 250 };

console.log(getTopSalary(people)); // Петро
