let greetButton = document.getElementById("greetBtn");
 greetButton.addEventListener("click", showGreeting);

 function createGreeting(name) {
    return "Welcome "+ name + " to JavaScript Functions!";

 }
 function showGreeting(){
    let name = document.getElementById("nameInput").value.trim();
    if (name === ""){
        alert("please enter your name");
        return;
    }
let message = createGreeting(name);
document.getElementById("output").innerText = message;
 }
