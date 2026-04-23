let buttton = document.getElementById("submitbtn");
let resetbtn = document.getElementById("resetbtn");
buttton.addEventListener("click", showName);
resetbtn.addEventListener("click",resetData);

function showName() {
    let name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name");
    } else {
        let hour = new Date().getHours();
        let greeting;
        if (hour < 12){
            greeting = "Good Morning";

        }else if (hour<18){
            greeting = "Good Afternoon";
        }else {greeting="Good Evening";}
        let upperName = name.toUpperCase();
        document.getElementById("output").innerText = `${greeting} ${name}`;
    }
}
function resetData(){
 document.getElementById("nameinput").value ="";
 document.getElementById("output").innerText ="";
}