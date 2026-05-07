let addCertButton = document.getElementById("addCertBtn");
let certInput = document.getElementById("CertInput");

addCertButton.addEventListener("click", addCertification);

certInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addCertification();
    }
});

function addCertification() {
    let certName = certInput.value.trim();

    if (certName === "") {
        alert("Please enter a certification name.");
        return;
    }

    let certificationList = document.getElementById("certificationList");

    let newCertification = document.createElement("li");
    newCertification.innerText = certName;

    certificationList.appendChild(newCertification);

    certInput.value = "";
}