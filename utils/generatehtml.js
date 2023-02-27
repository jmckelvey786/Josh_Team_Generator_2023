const fs = require('fs');

function generateHtml(daTeam) {
    const myTeam = daTeam.map(emp =>
        `<div class="Member">
        <h2>${emp.getRole()}</h2>
        <ul>
            <li>Name:${' '}<span> ${emp.name}</span></li>
            <li>Id:${' '}<span> ${emp.id}</span></li>
            <li>Email:${' '}<span> <a href=mailto:"${emp.email}">${emp.email}</a></span></li>
            <li>${' '}${emp.school}</li>
            <li>${' '}${emp.github}</li>
        </ul>
    </div>`
    )

    const HTMLwrapper =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css">
            <title>Team Generator</title>
        </head>
        <body>
        <header>
            <h1>My Team Members</h1>
        </header>
        <main>    
            <div id="Container">
                ${myTeam.join("")}
            </div>
        </main>
        </body>
        </html>`;
    fs.writeFile('./dist/index.html', HTMLwrapper, (err) => (err) ? console.log("Writing HTML failed") : console.log("Success!! Wrote html file"));
    fs.writeFile('./dist/style.css', `:root {
        --eggplant: #754668;
        --offwhite: #f5f5f5;
        --charcoal: #36454F;
        --darkGreen: #587D71;
        --brightgreen: #4DAA57;
        --lightgreen: #B5DDA4;
        --beige: #F9ECCC;
        --text-shadow: 1px 1px 1px black;
    }
    
    body {
        font-family: sans-serif;
        background-color: var(--offwhite);
    }
    
    header {
        background-color: var(--lightgreen);
        height: 15vh;
        display: flex;
        justify-content: center;
        align-content: center;
    
    }
    
    h1 {
        text-align: center;
        color: var(--offwhite);
        font-size: 5em;
        margin-top: 0px;
        text-shadow: var(--text-shadow);
    }
    
    h2 {
        text-align: center;
        color: var(--offwhite);
        text-shadow: var(--text-shadow);
        text-decoration: none;
    }
    
    ul {
        display: flex;
        flex-direction: column;
    
    }
    
    li {
        display: flex;
        flex-direction: inline;
        color: var(--offwhite);
        text-shadow: var(--text-shadow);
        list-style-type: none;
    }
    
    span {
        font-weight: 200;
    }
    
    a {
        color: var(--beige);
    }
    
    #Container {
        display: flex;
        flex-direction: inline;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .Member {
        background-color: var(--darkGreen);
        width: 25%;
        margin: 15px;
        
    }
    
    @media screen and (max-width:1100px) {
        h1 {
            font-size: 3.5em;
        }
    
        li {
            font-size: 0.9em;
        }
    }
    
    @media screen and (max-width: 900px) {
        #Container {
            flex-direction: column;
            align-items: center;
        }
    
        .Member {
            width: 60%;
        }
    }
    
    @media screen and (max-width: 545px) {
        .Member {
            width: 80%;
        }
    
        h1 {
            font-size: 2.8em;
        }
    }`, (err) => (err) ? console.log("Whoops, couldn't write the css file") : console.log('Success!! Wrote the css file"'));
}

module.exports = {generateHtml};