function startup() {
    if (!localStorage.getItem("hasVisited")) {
        alert("Warning! You are about to enter one of the most gruesome news websites of all time. Press 'OK' to continue.");
        localStorage.setItem("hasVisited", "true");
    }
}

startup();
