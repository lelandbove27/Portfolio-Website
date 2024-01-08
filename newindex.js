class project {
    constructor(name, images, description, technologies) {
        this.name = name;
        this.images = images;
        this.description = description;
        this.technologies = technologies;
    }
}

let projects = [
    new project(
        "Recipe Manager", 
        ["rm-create.png", "rm-list.png", "rm-login.png", "rm-main.png", "rm-view.png"], 
        "For this project, I worked with a group of 9 students in my class on this web app. Because of this project, I learned a lot of basic web development, improved my skills in HTMl, CSS, and JavaScript, learned how to work with others on the same codebase (Github), became more proficient in using Github and Github Actions, and most importantly I learned how to work well with a team.", 
        ["HTML", "CSS", "JavaScript"]
    ),
   new project(
        "Discord Bot Stock Exchange",
        ["dbse-help.png", "dbse-price-buy-view.png", "dbse-leaderboard.png", "dbse-sell.png"],
        "Using the Discord API and Node.js, a group of students and I built a discord bot that acts as a simulated stock exchange, allowing users to buy and sell stocks using real-time prices and compete to see who can earn the most money.",
        ["Node.js", "Discord API"]
   )

];


function createProjectCard(project, active, id) {

    let containerDiv = document.createElement("div");
    containerDiv.className = "container";

    let titleRowDiv = document.createElement("div");
    titleRowDiv.className = "row";

    let title = document.createElement("h2");
    title.innerHTML = project.name;

    titleRowDiv.appendChild(title);

    let contentRowDiv = document.createElement("div");
    contentRowDiv.className = "row";

    let imgCol = document.createElement("div");
    imgCol.className = "col";
    

    

    return containerDiv;

}

let projectsSection = document.getElementById("projects");
let id = 0;

projects.forEach(project => {
    let active = true;
    let projectCard = createProjectCard(project, active, id);
    projectsSection.appendChild(projectCard);
    id++;
});


