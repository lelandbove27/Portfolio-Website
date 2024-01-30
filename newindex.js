class project {
    constructor(name, dates, images, description, technologies) {
        this.name = name;
        this.dates = dates;
        this.images = images;
        this.description = description;
        this.technologies = technologies;
    }
}

let projects = [
    new project(
        "Recipe Manager", 
        "September 2021 - December 2021",
        ["rm-create.png", "rm-list.png", "rm-login.png", "rm-main.png", "rm-view.png"], 
        "For this project, I worked with a group of 9 students in my class on this web app. Because of this project, I learned a lot of basic web development, improved my skills in HTMl, CSS, and JavaScript, learned how to work with others on the same codebase (Github), became more proficient in using Github and Github Actions, and most importantly I learned how to work well with a team.", 
        ["HTML", "CSS", "JavaScript"]
    ),
   new project(
        "Discord Bot Stock Exchange",
        "March 2022 - June 2022"
        ["dbse-help.png", "dbse-price-buy-view.png", "dbse-leaderboard.png", "dbse-sell.png"],
        "Using the Discord API and Node.js, a group of students and I built a discord bot that acts as a simulated stock exchange, allowing users to buy and sell stocks using real-time prices and compete to see who can earn the most money.",
        ["Node.js", "Discord API"]
   )

];

function createProjectCard(project, active) {
   

    
    return card;

}

let projectsSection = document.getElementById("projects");

projects.forEach(project => {
    let card = document.createElement("div");
    card.className = "icon-card card col m-4 rounded-5";

   
    //projectsSection.appendChild(projectCard);
});

class technologyCard {
    constructor(name, icon, proficiency) {
        this.name = name;
        this.icon = icon;
        this.proficiency = proficiency;
    }
}

let technologyCards = [
    new technologyCard("HTML", "./media/icons/htmlIcon.png", "Proficient"),
    new technologyCard("CSS", "./media/icons/cssIcon.png", "Proficient"),
    new technologyCard("JavaScript", "./media/icons/javascriptIcon.png", "Proficient"),
    new technologyCard("TypeScript", "./media/icons/typescriptIcon.png", "Familiar"),
    new technologyCard("React", "./media/icons/reactIcon.png", "Familiar"),
    new technologyCard("Node.js", "./media/icons/nodeIcon.png", "Proficient"),
    new technologyCard("Express", "./media/icons/expressIcon.png", "Proficient"),
    new technologyCard("XCode", "./media/icons/xcodeIcon.png", "Proficient"),
    new technologyCard("Swift", "./media/icons/swiftIcon.png", "Proficient"),
    new technologyCard("Java", "./media/icons/javaIcon.png", "Proficient"),
    new technologyCard("Python", "./media/icons/pythonIcon.png", "Familiar"),
    new technologyCard("SQL", "./media/icons/sqlIcon.png", "Proficient"),
    new technologyCard("MongoDB", "./media/icons/mongodbIcon.png", "Familiar"),


]

let experienceSection = document.getElementById("experience-body");

technologyCards.forEach(technologyCard => {
    let card = document.createElement("div");
    card.className = "icon-card card col m-4 rounded-5";
    card.style.maxWidth = "250px";
    card.style.minWidth = "250px";
    card.style.maxHeight = "250px";
    card.style.minHeight = "250px";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body text-center d-flex flex-column justify-content-center align-items-center";
    let icon = document.createElement("img");
    icon.className = "icon-img";
    icon.src = technologyCard.icon;
    icon.alt = technologyCard.name + " icon";
    let name = document.createElement("p");
    name.innerHTML = technologyCard.name;
    let proficiency = document.createElement("p");
    proficiency.innerHTML = technologyCard.proficiency;

    cardBody.appendChild(icon);
    cardBody.appendChild(name);
    //cardBody.appendChild(proficiency);

    card.appendChild(cardBody)

    experienceSection.appendChild(card);
});




