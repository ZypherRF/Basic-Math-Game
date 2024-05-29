document.getElementById("enter1").onclick = function (){
    wwwww = document.getElementById("input1").value

if(wwwww == 13){
    answer1.textContent = `Correct`;
    document.location.href = `question3.html`
}
else{
    answer1.textContent = `Wrong`;
}
}