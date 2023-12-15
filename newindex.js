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
    /*
    new project(
        "Physics-Based Animation",
        [],
        "",
        ["C++", "OpenGL"]
    ),
    */
   new project(
        "Discord Bot Stock Exchange",
        ["dbse-help.png", "dbse-price-buy-view.png", "dbse-leaderboard.png", "dbse-sell.png"],
        "Using the Discord API and Node.js, a group of students and I built a discord bot that acts as a simulated stock exchange, allowing users to buy and sell stocks using real-time prices and compete to see who can earn the most money.",
        ["Node.js", "Discord API"]
   )


];


function createProjectCard(project, active) {
    let idNum = 0;

    
    let id = "carousel" + idNum;
    idNum++;

    let containerDiv = document.createElement("div");
    containerDiv.className = "container";

    let titleRowDiv = document.createElement("div");
    titleRowDiv.className = "row";

    let title = document.createElement("h2");
    title.innerHTML = project.name;

    titleRowDiv.appendChild(title);

    let contentRowDiv = document.createElement("div");
    contentRowDiv.className = "row";

    let carouselColDiv = document.createElement("div");
    carouselColDiv.className =  "col";

    let descriptionColDiv = document.createElement("div");
    descriptionColDiv.className =  "col";

    let carouselDiv = document.createElement("div");
    carouselDiv.className = "carousel slide"; 
    carouselDiv.id = "carousel";
    carouselDiv.setAttribute("data-ride", "carousel");

    let carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    project.images.forEach(image => {
        let item = document.createElement("div");
        if(active) {
            item.className = "carousel-item active";
        }
        else {
            item.className = "carousel-item"
        }

        let carouselImage = document.createElement("img");
        carouselImage.src = "media/" + image;
        carouselImage.className = "d-block w-100";
        carouselImage.alt = "Project Image"

        item.appendChild(carouselImage);

        carouselInner.appendChild(item);
       
    });

    let carouselLeft = document.createElement("a");
    carouselLeft.className =  "carousel-control-prev";
    carouselLeft.href = "#carousel";


    carouselColDiv.appendChild(carouselDiv);
    contentRowDiv.appendChild(carouselColDiv);
    carouselDiv.appendChild(carouselInner);

    containerDiv.appendChild(titleRowDiv);
    containerDiv.appendChild(carouselDiv);


    return containerDiv;

}

let projectsSection = document.getElementById("projects");
let active = true;

projects.forEach(project => {
    let projectCard = createProjectCard(project, active);
    active = false;
    projectsSection.appendChild(projectCard);
});


