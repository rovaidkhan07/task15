let modebtm = document.querySelector("#mode");

let curmode ="light";
modebtm.addEventListener("click", () => {


    if (curmode === "light") {
        curmode = "dark";
    } else {
        curmode = "light";
    }
    console.log("Current mode is: " + curmode);
});
