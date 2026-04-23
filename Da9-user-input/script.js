let buttton = document.getElementById("submitbtn");
let resetbtn = document.getElementById("resetbtn");
buttton.addEventListener("click", showName);
resetbtn.addEventListener("click",resetData);

function showname (
) {
    let name = document.getElementById("nameinput").value;
    document.getElementById("output").innerText="Hello"+name;

}
function resetData(){
 document.getElementById("nameinput").value ="";
 document.getElementById("output").innerText ="";
}