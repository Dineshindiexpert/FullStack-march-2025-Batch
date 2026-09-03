let moment = 0;
let ledInterval = null;

function blinking() {
    const container = document.querySelector(".container");
    const btn = document.querySelector(".btn");

    if (ledInterval) {

        clearInterval(ledInterval);
        ledInterval = null;
        btn.innerText = "Start LED";
        return;
    }


    btn.innerText = "Stop LED";

    ledInterval = setInterval(() => {

        if (moment === 0) {
            document.body.style.background =
                "linear-gradient(to left, rgba(56, 54, 54, 1), rgb(135, 135, 149))";
            container.style.color = "white";
            btn.classList.add("btn-primary");
            btn.classList.remove("btn-success");
            moment = 1;
        } else {
            document.body.style.background =
                "linear-gradient(to left, rgb(135, 135, 149), skyblue)";
            container.style.color = "black";
            btn.classList.add("btn-success");
            btn.classList.remove("btn-primary");
            moment = 0;
            document.querySelectorAll("main").forEach(img => {
                img.style.display = "none";
            });
        }

    }, 1000);
}
let moment1 = 0;

function revert() {
    for (let i = 0; i < 21; i++) {
        const container = document.querySelector(".container");
        const btn = document.querySelector(".btn");

        if (moment1 === 0) {
            document.body.style.background =
                "linear-gradient(to left, rgba(56, 54, 54, 1), rgb(135, 135, 149))";

            container.style.color = "white";

            btn.classList.remove("btn-success");
            btn.classList.add("btn-primary");

            moment1 = 1;
        }
        else {
            document.body.style.background =
                "linear-gradient(to left, rgb(135, 135, 149), skyblue)";

            container.style.color = "black";

            btn.classList.remove("btn-primary");
            btn.classList.add("btn-success");

            moment1 = 0;
        }
    }

}
let clickCount = 1;
document.getElementById("myBtn").addEventListener("click", () => {
    clickCount++;
    // document.getElementById("count").innerText = clickCount;
    console.log("you click the button is : " + clickCount);
    if (clickCount % 2 == 0) {
        document.querySelectorAll(".img-fluid").forEach(img => {
            img.style.display = "none";
        });
    }
    else {
        document.querySelectorAll(".img-fluid").forEach(img => {
            img.style.display = "block";
        })
    }
});
