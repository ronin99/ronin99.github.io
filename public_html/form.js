function my() {
            if (document.getElementById("xm").value === "") {
                alert('Please enter your first name');
                return false;
            }
}
function m1(){
            if (document.getElementById("lm").value === "") {
                alert('Please enter your Last name');
                return false;
            }
}
var email = document.getElementById("email");
    email.addEventListener("input", function(event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I need Email address :)")
            email.style.border = "red";
        } else {
            email.setCustomValidity("");
        }
});