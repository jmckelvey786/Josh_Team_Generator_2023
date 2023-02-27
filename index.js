console.log('Team Generator');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./utils/generatehtml')
var daTeam = [];

function createManager () {
    const Manager1 = new Manager();
    inquirer
        .prompt([
            {
                type: "text",
                message: "What is the name of the Team Manager?",
                name: "name"
            },
            {
                type: "text",
                message: "What is Team Manager's ID Number?",
                name: "id"
            },
            {
                type: "text",
                message: "What is the Team Manager's email address?",
                name: "email"
            },
            {
                type: "text",
                message: "What is the Team Manager's office number?",
                name: "office"
            }
        ])
        .then((response) => {
            Manager1.name = response.name;
            Manager1.id = response.id;
            Manager1.email = response.email;
            Manager1.role = Manager1.getRole();
            Manager1.officeNumber = `Office Number: <span>${response.office}</span>`;
            daTeam.push(Manager1);
            addTeamMember();
        })
}

function addTeamMember () {
    inquirer
        .prompt({
            type: "confirm",
            message: "Would you like to add an Engineer or Intern?",
            name: "addMember"
        })
        .then((response) => {
            if (response.addMember) {
                createEmployee();
            } else {
                console.log("All Done!")
                generateHtml.generateHtml(daTeam);
            }
        })
}

function createEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Are you adding an Engineer or Intern as an Employee?",
                name: "role",
                choices: ["Intern", "Engineer"]
            },
            {
                type: "text",
                message: "What is the name of the Employee?",
                name: "name"
            },
            {
                type: "text",
                message: "What is the Employee's ID?",
                name: "id"
            },
            {
                type: "text",
                message: "What is the Employee's email?",
                name: "email"
            }
        ])
        .then((response) => {
            if (response.role == "Intern") {
                createIntern(response.name, response.id, response.email);
            } else {
                createEngineer(response.name, response.id, response.email);
            }
        })
}

function createIntern(name, id, email) {
    const Intern1 = new Intern(name, id, email);
    inquirer
        .prompt({
            type: "text",
            message: `Where does ${Intern1.name} go to school?` ,
            name: "school"
        })
        .then((response) => {
            Intern1.school = `School: <span>${response.school}</span>`;
            daTeam.push(Intern1);
            addTeamMember();
        })
}

function createEngineer(name, id, email) {
    const Engineer1 = new Engineer(name, id, email);
    inquirer
        .prompt({
            type: "text",
            message: `What is ${Engineer1.name} github username?` ,
            name: "github"
        })
        .then((response) => {
            Engineer1.github = `Github: <span>${response.github}</span>`;
            daTeam.push(Engineer1);
            addTeamMember();
        })
}

// function generateHtml(daTeam) {
//     const myTeam = daTeam.map(emp =>
//         `<div class="Member">
//         <h2>${emp.getRole()}</h2>
//         <ul>
//             <li>Name:${' '}<span> ${emp.name}</span></li>
//             <li>Id:${' '}<span> ${emp.id}</span></li>
//             <li>Email:${' '}<span> <a href=mailto:"${emp.email}">${emp.email}</a></span></li>
//             <li>${' '}${emp.school}</li>
//             <li>${' '}${emp.github}</li>
//         </ul>
//     </div>`
//     )

//     const HTMLwrapper =
//         `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link rel="stylesheet" href="./style.css">
//             <title>Team Generator</title>
//         </head>
//         <body>
//         <header>
//             <h1>My Team Members</h1>
//         </header>
//         <main>    
//             <div id="Container">
//                 ${myTeam.join("")}
//             </div>
//         </main>
//         </body>
//         </html>`;
//     fs.writeFile('./dist/index.html', HTMLwrapper, (err) => (err) ? console.log("Writing HTML failed") : console.log("Success!! Wrote html file"));
//     fs.writeFile('./dist/style.css', `:root {
//         --eggplant: #754668;
//         --offwhite: #f5f5f5;
//         --charcoal: #36454F;
//         --darkGreen: #587D71;
//         --brightgreen: #4DAA57;
//         --lightgreen: #B5DDA4;
//         --beige: #F9ECCC;
//         --text-shadow: 1px 1px 1px black;
//     }
    
//     body {
//         font-family: sans-serif;
//         background-color: var(--offwhite);
//     }
    
//     header {
//         background-color: var(--lightgreen);
//         height: 15vh;
//         display: flex;
//         justify-content: center;
//         align-content: center;
    
//     }
    
//     h1 {
//         text-align: center;
//         color: var(--offwhite);
//         font-size: 5em;
//         margin-top: 0px;
//         text-shadow: var(--text-shadow);
//     }
    
//     h2 {
//         text-align: center;
//         color: var(--offwhite);
//         text-shadow: var(--text-shadow);
//         text-decoration: none;
//     }
    
//     ul {
//         display: flex;
//         flex-direction: column;
    
//     }
    
//     li {
//         display: flex;
//         flex-direction: inline;
//         color: var(--offwhite);
//         text-shadow: var(--text-shadow);
//         list-style-type: none;
//     }
    
//     span {
//         font-weight: 200;
//     }
    
//     a {
//         color: var(--beige);
//     }
    
//     #Container {
//         display: flex;
//         flex-direction: inline;
//         flex-wrap: wrap;
//         justify-content: center;
//     }
    
//     .Member {
//         background-color: var(--darkGreen);
//         width: 25%;
//         margin: 15px;
        
//     }
    
//     @media screen and (max-width:1100px) {
//         h1 {
//             font-size: 3.5em;
//         }
    
//         li {
//             font-size: 0.9em;
//         }
//     }
    
//     @media screen and (max-width: 900px) {
//         #Container {
//             flex-direction: column;
//             align-items: center;
//         }
    
//         .Member {
//             width: 60%;
//         }
//     }
    
//     @media screen and (max-width: 545px) {
//         .Member {
//             width: 80%;
//         }
    
//         h1 {
//             font-size: 2.8em;
//         }
//     }`, (err) => (err) ? console.log("Whoops, couldn't write the css file") : console.log('Success!! Wrote the css file"'));
// }

createManager();