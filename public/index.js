document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "faculty" && password == "faculty") {
       
        window.location.href = "./faculty.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}
