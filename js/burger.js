let burger = document.querySelector("svg");

console.log(burger);

burger.addEventListener("click", () => {
    let element = document.querySelector(".navigation");
    console.log(element.style.display);
    if (!element.style.display || element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }


});