class project {
    constructor(title, dates, images, description, technologies) {
        this.title = title;
        this.dates = dates;
        this.images = images;
        this.description = description;
        this.technologies = technologies;
    }
}

let projectCards = [
    new project(
        "Recipe Manager", 
        "September 2021 - December 2021",
        ["./media/rm-create.png", "./media/rm-list.png", "./media/rm-login.png", "./media/rm-main.png", "./media/rm-view.png"], 
        "For this project, I worked with a group of 9 students in my class on this web app. Because of this project, I learned a lot of basic web development, improved my skills in HTMl, CSS, and JavaScript, learned how to work with others on the same codebase (Github), became more proficient in using Github and Github Actions, and most importantly I learned how to work well with a team.", 
        ["HTML", "CSS", "JavaScript"]
    ),
   new project(
        "Discord Bot Stock Exchange",
        "March 2022 - June 2022",
        ["./media/dbse-price-buy-view.png", "./media/dbse-help.png", "./media/dbse-leaderboard.png", "./media/dbse-sell.png"],
        "Using the Discord API and Node.js, a group of students and I built a discord bot that acts as a simulated stock exchange, allowing users to buy and sell stocks using real-time prices and compete to see who can earn the most money.",
        ["Node.js", "Discord API"]
   ),
   new project(
        "Data Analytics Web Application",
        "March 2023 - June 2023",
        ["./media/da-dashboard.png", "./media/da-adminpanel.png", "./media/da-basicauth.png", "./media/da-database.png", "./media/da-mainpage.png", "./media/da-report.png"],
        "For this school project, I designed a web application such that when users access the main page, data about the user is sent to and stored in a MongoDB database using a web api that I created in Node.js and Express. On the reporting site, that data is retrieved and displayed in charts created using ZingChart. IT was hosted on Digital Ocean using Apache.",
        ["MongoDB, Node.js, Express, HTML, CSS, JavaScript, ZingChart, Apache, Digital Ocean, GitHub Actions"]
    ),
    new project(
        "Database Management Application for Schools",
        "March 2023 - June 2023",
        ["./media/sdb-tables.png", "./media/sdb-entryform.png", "./media/sdb-query1.png", "./media/sdb-query2.png"],
        "I created a database management web application that allows users to fill out forms to create, read, update, and delete database entries containing information pertaining to school such as course offerings, student information, faculty information, and grades. It also contains forms which when filled out will return the results of more complex queries such as the grades given in a course by a specific professor.",
        ["Java Server Pages", "Postgres", "Apache Tomcat"]
    ),
    new project(
        "Easiest Shopping List",
        "December 2023 - Current",
        ["./media/sl-home.png", "./media/sl-shopping.png"],
        "A shopping list app that allows users to create a shopping list and cross things off the list after purchasing them at the store. This app stores the previous items added to the list, allowing users to re-add items to the list with just a tap.",
        ["Swift", "SwiftUI", "Core Data"]
    )
   

];

let projectsSection = document.getElementById("projects");

projectCards.forEach(project => {
    let card = document.createElement("div");
    card.className = "project-card card col m-4 rounded-5";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body text-center d-flex flex-column justify-content-center align-items-center";

    let title = document.createElement("h2");
    title.innerHTML = project.title;

    let dates = document.createElement("h3");
    dates.innerHTML = project.dates;

    let cardContents = document.createElement("section");
    cardContents.className = "project-card-contents" 

    let projectImage = document.createElement("img");
    projectImage.classList = "resizable project-image p-4"
    projectImage.src = project.images[0];
    console.log(project.images);

    let projectInformation = document.createElement("div");
    projectInformation.className = "px-4"

    let projectDescription = document.createElement("p");
    projectDescription.innerHTML = project.description;

    let projectTechnologies = document.createElement("p");
    let technologiesString = "Technologies Used:";
    (project.technologies).forEach(technology => {
        technologiesString += ` ${technology}`;
    });
    projectTechnologies.innerHTML = technologiesString;

    projectsSection.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(dates);
    cardBody.appendChild(cardContents);
    cardContents.appendChild(projectImage);
    cardContents.appendChild(projectInformation);
    projectInformation.appendChild(projectDescription);
    projectInformation.appendChild(projectTechnologies);

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
    card.style.maxWidth = "200px";
    card.style.minWidth = "200px";
    card.style.maxHeight = "200px";
    card.style.minHeight = "200px";
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




