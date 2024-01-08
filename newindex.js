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

    let carouselColDiv = document.createElement("div");
    carouselColDiv.className =  "col";

    let descriptionColDiv = document.createElement("div");
    descriptionColDiv.className =  "col";

    let carouselDiv = document.createElement("div");
    carouselDiv.className = "carousel slide"; 
    carouselDiv.id = "carousel" + id;
    carouselDiv.setAttribute("data-ride", "carousel");
    carouselDiv.setAttribute("data-interval", "false");

    let carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    activeFlag = active;
    project.images.forEach(image => {
        let item = document.createElement("div");
        if(active) {
            item.className = "carousel-item active";
            active = false;
        }
        else {
            item.className = "carousel-item"
        }

        let carouselImage = document.createElement("img");
        carouselImage.src = "media/" + image;
        carouselImage.className = "d-block w-100 img-fluid carousel-image-sizing";
        carouselImage.alt = "Project Image";

        item.appendChild(carouselImage);

        carouselInner.appendChild(item);
       
    });

    let carouselLeft = document.createElement("a");
    carouselLeft.className =  "carousel-control-prev";
    carouselLeft.href = "#carousel" + id;
    carouselLeft.setAttribute("role", "button");
    carouselLeft.setAttribute("data-slide", "prev");
    let prevIcon = document.createElement("span");
    prevIcon.className = "carousel-control-prev-icon";
    carouselLeft.appendChild(prevIcon)

    let carouselRight = document.createElement("a");
    carouselRight.className = "carousel-control-next";
    carouselRight.href = "#carousel" + id;
    carouselRight.setAttribute("role", "button");
    carouselRight.setAttribute("data-slide", "next");
    let nextIcon = document.createElement("span");
    nextIcon.className = "carousel-control-next-icon";
    carouselRight.appendChild(nextIcon);
    
    carouselColDiv.appendChild(carouselDiv);
    contentRowDiv.appendChild(carouselColDiv);
    carouselDiv.appendChild(carouselInner);
    carouselDiv.appendChild(carouselRight);
    carouselDiv.appendChild(carouselLeft);
    containerDiv.appendChild(titleRowDiv);
    containerDiv.appendChild(carouselDiv);

    /*
    let fullCarousel = document.createElement("div");
    fullCarousel.className = "full-carousel";
    fullCarousel.appendChild(carouselLeft);
    fullCarousel.appendChild(carouselDiv);
    fullCarousel.appendChild(carouselRight);

    containerDiv.appendChild(fullCarousel);
    */

    /*
    containerDiv.appendChild(carouselLeft);
    containerDiv.appendChild(carouselRight);
    */
    
    


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


