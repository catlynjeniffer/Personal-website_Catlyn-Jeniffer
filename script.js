let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}



const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
if (event.target.classList.contains("filter-item")){
filterContainer.querySelector(".active").classList.remove("active");
event.target.classList.add("active");
const filterValue = event.target.getAttribute("data-filter");
galleryItems.forEach((item) => {
    if(item.classList.contains(filterValue) || filterValue === 'All'){
        item.classList.remove("hide");
        item.classList.add("show");
    }
    else {
        item.classList.remove("show");
        item.classList.add("hide");
    }
});
}
});