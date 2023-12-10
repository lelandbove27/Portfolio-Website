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
        "Physics-Based Animation",
        [],
        "",
        ["C++", "OpenGL"]
    ),


];


function createProjectCard() {
    let idNum = 0;

    
    let id = "carousel" + idNum;
    idNum++;

    let containerDiv = document.createElement("div");
    containerDiv.className = "container";


}

let projectsSection = document.getElementById("projects");

