//function.
// use afunction to introduce a new p tag with the plain text "our js functions are working"
function new_plain_text(){
    document.createElement('p').textContent ="our js events are working";
}
function bbb(){
    document.getElementsByClassName("change_color")[0].style.color = "green";
}
// function to display value entered
function showValue() {
    let name = document.getElementById("username").value;
    console.log(name);
    alert(name);
}
