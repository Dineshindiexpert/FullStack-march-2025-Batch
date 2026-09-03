/***********************
 * TASK 1 – userProfile
 ***********************/

const userProfile = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  skills: ["javascript", "react", "node"],
  isActive: true,

  // returns formatted user details
  getUserInfo() {
    return `ID: ${this.id}
Name: ${this.name}
Email: ${this.email}
Skills: ${this.skills.join(", ")}
Active: ${this.isActive}`;
  },

  // adds new skill
  addSkill(skill) {
    this.skills.push(skill);
  },

  // deactivates user
  deactivate() {
    this.isActive = false;
  }
};

/***********************
 * Usage
 ***********************/

console.log(userProfile.getUserInfo());

userProfile.addSkill("typescript");
console.log("\nAfter Adding Skill:");
console.log(userProfile.getUserInfo());

userProfile.deactivate();
console.log("\nAfter Deactivate:");
console.log(userProfile.getUserInfo());
