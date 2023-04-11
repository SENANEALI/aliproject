const datas = {
    section: {
        title: ["Today's ", "Special"],
        crustyFish : {
            title: "The Crusty fish",
            img: {url : "./img/recipe1.jpg", alt: "fresh fries fish with some green pees and a white sauce"},
            para: [
                {p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
            ],
            a: "Read more",
        },
        multiFish : {
            title: "The Multi fish",
            img: {url : "./img/recipe2.jpg", alt: "crevettes, coquillages in different white cup and a green sauce"},
            para: [
                {p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et? rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
                {p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dicta incidunt autem nulla amet laboriosam quos nostrum eveniet et?",},
            ],
            a: "Read more",
        },
        
    },
        
}

function injectTodom(){

    document.querySelector("main").textContent = ""; 

    const section = document.createElement("section");
    const title = document.createElement("h2");

    section.appendChild(title).textContent("Welcome to fish & chips !");


}


function clickToggleBtn(){

    document.querySelector("btn-section").classList.add("hide");
    document.querySelector("btn-aside").classList.add("hide");

    document.body.classList.add("btn-section-hide").classList.toggle("active");
    document.body.classList.add("btn-aside-hide").classList.toggle("active");


}

document.addEventListener("DOMContentLoaded", function(){
    console.log();
    
    const sectionBtn = document.querySelector("section");
    const asideBtn = document.querySelector("aside");

    sectionBtn.addEventListener("click", clickToggleBtn() );
    asideBtn.addEventListener("click", clickToggleBtn());
})

injectTodom();



