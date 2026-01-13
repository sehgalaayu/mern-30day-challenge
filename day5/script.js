/* -----------------------------------
Loop: 1 to 50
Print "even" for even numbers
----------------------------------- */

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i, "even");
  } else {
    console.log(i);
  }
}

/* -----------------------------------
Array + filter (even numbers)
----------------------------------- */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

/* -----------------------------------
 Object: student
----------------------------------- */

const student = {
  name: "Aayu",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"],
};

/* Add a new skill */
student.skills.push("React");

console.log("Updated student:", student);

/* -----------------------------------
 Loop through object keys & values
----------------------------------- */

for (const key in student) {
  console.log(key + ":", student[key]);
}
