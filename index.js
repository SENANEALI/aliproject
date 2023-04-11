

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

function injectTodom(datas){
    
    console.log(datas);
}



for (const data of datas){

    let section = document.querySelector("section").textContent = ""; 

    let titre = document.createElement("h2");
    titre.textContent = data.title[0]+','+data.title[1];

    let aside = document.createElement("aside");
    section.appendChild(aside);

    let titre2 = document.createElement("h3");
    titre2.textContent = data.title.lastChild;

    let image = new Image();
    Image.src = data.img ;

    let p1 = document.createElement("p");
    p1.textContent = data.para[0];

    let p2 = document.createElement("p");
    p2.textContent = data.para[1];

    let p3 = document.createElement("p");
    p3.textContent = data.para[2];

    let lien = document.createElement("a");
    lien.textContent = data.a;

    



    section.appendChild(titre);
    section.appendChild(aside);
    aside.appendChild(titre2);
    aside.appendChild(image);
    aside.appendChild(p1);
    aside.appendChild(p2);
    aside.appendChild(p3);
    aside.appendChild(a);

    

}


function clickToggleBtn(){

    document.querySelector("btn-section").classList.add("active");
    document.querySelector("btn-aside").classList.add("active");

    document.body.classList.add("btn-section-active").classList.toggle("hide");
    document.body.classList.add("btn-aside-active").classList.toggle("hide");


}

document.addEventListener("DOMContentLoaded", function(){
    
    console.log();
    
    const sectionBtn = document.querySelector("section");
    const asideBtn = document.querySelector("aside");

    sectionBtn.addEventListener("click", clickToggleBtn() );
    asideBtn.addEventListener("click", clickToggleBtn());
})

injectTodom();




