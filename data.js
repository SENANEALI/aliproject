
function injectTodom(){

    document.querySelector("section").textContent = ""; 

    const section = document.createElement("section");

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






export 