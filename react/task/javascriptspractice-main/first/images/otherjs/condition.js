function changeColor() {

    // Change ID #heading
    document.querySelectorAll("#heading").forEach(el => {
        el.style.color = "pink";
    });

    // Change elements with class .heading-class
    document.querySelectorAll(".heading-class").forEach(el => {
        el.style.color = "blue";
    });
}
