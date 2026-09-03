const users = [
  {
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "1",
    skills: ["html", "css", "javascript"]
  },
  {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "11",
    skills: ["react", "node", "css"]
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "100",
    skills: ["vue", "javascript", "html"]
  }
];

// Task 1 Solution
const nameskill = users.map(u =>
  u.name.trim().toLowerCase().split(" ").filter(w => w).map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
);

console.log(nameskill);

// task 2

// •	Create a unique list of all skills (no duplicates)
// •	Sort skills alphabetically
// •	Count how many users know JavaScript
// Expected Output: ["css", "html", "javascript", "node", "react", "vue"]





let newskills = [];
let uniqueSkills = [];
let user = 0;


users.map(u => {
  if(u.skills==="javascript"){
    user++;
  }
  u.skills.map(s => newskills.push(s));
});

/// for add the unique skills
newskills.map(s => {
  if (!uniqueSkills.includes(s)) {
    uniqueSkills.push(s);
  }
});

//count user
users.map(u => {
  if (u.skills.includes("javascript")) {
    user++;
  }
});

// sort
uniqueSkills.sort();

console.log(uniqueSkills);
// console.log(newskills);
console.log(`value of javascript ${user}`);


 
//  Task 3 Number Operations
// 1.	Convert salary from string to number
// 2.	Calculate:
// o	Average salary
// o	Highest salary
// o	Lowest salary
// Expected Output: {
//   	average: 58333,  
// highest: 72000,  
// lowest: 48000
// }



const salary = [];

users.forEach(u => {
  salary.push(Number(u.salary));
});

salary.sort();

console.log(salary);
let lowest = salary[0];
let largest = salary[salary.length - 1];
 
console.log("Lowest salary:", lowest);
console.log("Largest salary:", largest);
console.log("Average salary:", salary.reduce((a, b) => a + b, 0)    / salary.length);


// Task 4: Date Operations
// •	Convert dob into a Date object
// •	Calculate each user’s current age
// •	Find the oldest user
// Expected Output Example: {
//   name: "Maria Smith",
//   age: 36
// }


function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
let oldestUser = null;
let maxAge = 0;
users.forEach(u => {
  const age = calculateAge(u.dob);
  if (age > maxAge) {
    maxAge = age;
    oldestUser = u;
  }

}
 
);
console.log("oldes-user", maxAge);
 
 
 