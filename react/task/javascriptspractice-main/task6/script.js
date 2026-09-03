// Task on DOM

// Create a dynamic user list UI using only JavaScript DOM manipulation, where all DOM updates happen programmatically on page load.
// Provided Data:
// const users = [
//   { id: 1, name: "Anand", role: "Admin", active: true },
//   { id: 2, name: "Riya", role: "Editor", active: false },
//   { id: 3, name: "Karan", role: "Viewer", active: true },
//   { id: 4, name: "Meera", role: "Editor", active: true }
// ];

// HTML Structure
// <div class="user-app">
//   <h2>User Directory</h2>
//   <table>
//     <thead>
//       <tr>
//         <td>ID</td>
//         <td>Name</td>
//         <td>Role</td>
//         <td>Active</td>
//       </tr>
//     </thead>
//     <tbody id="tabledata">
//     </tbody>
//   </table>
//   <p id="summary"></p>
// </div>
// Task Requirements
// 1)	Sort the data by name in ascending order.
// 2)	Loop through users array 
// 3)	Create row for each record
// 4)	Append it inside #tabledata
// 5)	Inside #summary show summery of users in following manner
// Total Users: 4 | Active: 3 | Inactive: 1


// starts here
const users = [
  { id: 1, name: "Anand", role: "Admin", active: true },
  { id: 2, name: "Riya", role: "Editor", active: false },
  { id: 3, name: "Karan", role: "Viewer", active: true },
  { id: 4, name: "Meera", role: "Editor", active: true }
];

// Sort users by name in ascending order
users.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
const tableBody = document.getElementById('tabledata');
let active = 0;    
let inactive= 0;
// Loop through users array and create table rows
users.forEach(user => {
  const row = document.createElement('tr');
  document.querySelector('table').style.backgroundColor='black';
  document.querySelector('table').style.color='white';
    document.querySelector('table').style.border="10px solid gray";
    row.innerHTML = `
        <td>${user.id}</td>
        
        <td>${user.name}</td>
        <td>${user.role}</td>
        <td>${user.active ? 'Yes' : 'No'}</td>  
    `;
    tableBody.appendChild(row);
    if(user.active) {
        active++;
    } else {
        inactive++;
    }
});
// Update summary
const summary = document.getElementById('summary');
summary.textContent = `Total Users: ${users.length} | Active: ${active} | Inactive: ${inactive}`;



// finish task messaage
const finish = document.createElement('p');
document.body.appendChild(finish);      
finish.textContent=`task completed here :`;
document.querySelector('p').style.backgroundColor='red';
document.querySelector('p').style.color='white';
    document.querySelector('p').style.padding="5px";